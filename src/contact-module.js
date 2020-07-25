const makeContact = () => {
  const div = document.createElement("div");

  div.classList.add("tab-contents");
  div.innerHTML = `
    <h2 class="module-title">Contact</h2>
    <p>Address: 123 Lincolnway Ave. Valparaiso, IN 46385</p>
    <p>Telephone: 1-219-867-5309</p>
    <p>Email: Cafe_Vas@gmail.com</p>
  `;
  document.getElementById("content").appendChild(div);
};

export default makeContact;
