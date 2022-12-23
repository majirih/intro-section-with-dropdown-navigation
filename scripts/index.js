function myFunction() {
  document.querySelector("#myDropdown").classList.toggle("show");
 
  if (!event.target.matches(".dropbtn")) {
    const dropdowns = document.querySelector(".dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

function toggleDropdown() {
    document.querySelector("#myDropdown2").classList.toggle("show");
   
    if (!event.target.matches(".companybtn")) {
      const dropdown = document.querySelector(".company-content");
      let i;
      for (i = 0; i < dropdown.length; i++) {
        const openDropdowns = dropdown[i];
        if (openDropdowns.classList.contains("show")) {
          openDropdowns.classList.remove("show");
        }
      }
    }
  };
  