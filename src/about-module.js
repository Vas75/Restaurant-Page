const makeAbout = () => {
  const div = document.createElement("div");
  div.classList.add("tab-contents");
  div.innerHTML = `
    <header class="about-header">
      <h2>Cafe Vas</h2>
      <h3 class="module-title">The best little cafe in town!</h3>
    </header>
    
    <p>
      A trendy restaurant located in Valparaiso, IN, serving dinner
      favorites and breakfast classics. Cafe Vas opened its doors in 2001 on
      Lincolnway Avenue in the heart of Valparaiso's downtown area. It’s
      become a popular restaurant for dinner, lunch, and breakfast. 
      We are open Monday through Friday from 8 a.m. to 7 p.m.
    </p>
    `;

  document.getElementById("content").appendChild(div);
};

export default makeAbout;
