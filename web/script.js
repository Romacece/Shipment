document.addEventListener("DOMContentLoaded", () => {
  const shipmentList = document.getElementById("shipment-list");

  const loadShipments = async () => {
    const files = [
      "../data/shipment1.json",
      "../data/shipment2.json",
      "../data/shipment3.json",
    ];
    let allData = [];

    // Fetch each file and merge the data into one array
    for (const file of files) {
      try {
        const response = await fetch(file);
        if (!response.ok) throw new Error(`Erreur lors du chargement : ${file}`);
        const data = await response.json();
        allData = allData.concat(data);
      } catch (error) {
        console.error(error.message);
      }
    }

    displayShipments(allData);
  };

  // Function to display shipments grouped by date
  const displayShipments = (data) => {
    const groupedByDate = data.reduce((acc, curr) => {
      const date = new Date(curr.eventDateTime).toLocaleDateString();
      if (!acc[date]) acc[date] = [];
      acc[date].push(curr);
      return acc;
    }, {});

    // Iterate over each date and its events
    for (const [date, events] of Object.entries(groupedByDate)) {
      const dateCard = document.createElement("div");
      dateCard.classList.add("shipment-card", "col-12");

      const dateTitle = document.createElement("div");
      dateTitle.classList.add("shipment-date");
      dateTitle.textContent = date;
      dateCard.appendChild(dateTitle);

      events.forEach((event) => {
        const eventCard = document.createElement("div");
        eventCard.classList.add("shipment-event", "d-flex", "gap-2", "align-items-start");

        const details = document.createElement("div");
        details.classList.add("shipment-details", "flex-grow-1");

        const status = document.createElement("div");
        status.classList.add("shipment-status");


        //Shipment Delay, Exception, Arrival and Delivery
        if (event.shipment?.status?.shipmentIsDelayed === 1) {
          status.classList.add("delayed");
        } else if (event.shipment?.status?.shipmentException === 1) {
          status.classList.add("exception");
        } else {
          const statusIcon = document.createElement("clr-icon");
          if (event.eventPosition.status === "ARRIVED AT YOUR PLACE") {
            statusIcon.setAttribute("shape", "map-marker");
            statusIcon.setAttribute("size", "30");
            statusIcon.classList.add("icon-map");
            eventCard.appendChild(statusIcon);
          } else if (event.eventPosition.status === "DELIVERED") {
            statusIcon.setAttribute("shape", "check");
            statusIcon.setAttribute("size", "25");
            statusIcon.classList.add("icon-check");
            eventCard.appendChild(statusIcon);
          }
        }

        status.textContent = `${event.eventPosition.status} - ${event.eventPosition.city}, ${event.eventPosition.country}`;
        details.appendChild(status);

        const comments = document.createElement("div");
        if (event.eventPosition.comments) {
          displayComments(comments, event.eventPosition.comments);
        } else {
          comments.textContent = "No comments.";
        }

        details.appendChild(comments);
        eventCard.appendChild(details);
        dateCard.appendChild(eventCard);
      });

      shipmentList.appendChild(dateCard);
    }
  };

  // Function to manage the display of long comments
  const displayComments = (commentsContainer, commentText) => {
    commentsContainer.classList.add("comments");

    const textContainer = document.createElement("div");
    textContainer.classList.add("comment-text");
    textContainer.textContent = commentText;
    
    const toggleButton = document.createElement("button");
    toggleButton.classList.add("btn", "btn-link", "p-0", "toggle-button");
    toggleButton.textContent = "Voir tout";

    commentsContainer.appendChild(textContainer);
    commentsContainer.appendChild(toggleButton);

    const checkTextOverflow = () => {
        const lineHeight = parseInt(window.getComputedStyle(textContainer).lineHeight);
        const threeLines = lineHeight * 3; 

        if (textContainer.scrollHeight > threeLines) {
            toggleButton.style.display = "block";
        } else {
            toggleButton.style.display = "none";
        }
    };

    setTimeout(checkTextOverflow, 0);

    window.addEventListener('resize', checkTextOverflow);

    toggleButton.addEventListener("click", () => {
        const isExpanded = textContainer.classList.toggle("expanded");
        toggleButton.textContent = isExpanded ? "Voir moins" : "Voir tout";
    });
  }
  
  loadShipments();
});