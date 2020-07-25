const makeMenu = () => {
  const div = document.createElement("div");
  div.classList.add("tab-contents");

  div.innerHTML = `
    <section class="menu">
    <h2 class="module-title">Menu</h2>

    <div>
        <h3>Sandwiches</h3>
        <ul>
        <li>Smokehouse BBQ Chicken Sandwich $8.95</li>
        <li>Roasted Turkey & Avocado BLT $9.95</li>
        <li>Heritage Ham & Swiss $7.95</li>
        </ul>
    </div>
    <div>
        <h3>Drinks</h3>
        <ul>
        <li>coffee $1.95</li>
        <li>expresso $2.95</li>
        <li>juice $2.00</li>
        <li>soda $1.25</li>
        </ul>
    </div>
    <div>
        <h3>Desserts</h3>
        <ul>
          <li>ice cream $1.50</li>
          <li>cookie $1.00</li>
        </ul>
    </div>
    </section>
    `;

  document.getElementById("content").appendChild(div);
};

export default makeMenu;
