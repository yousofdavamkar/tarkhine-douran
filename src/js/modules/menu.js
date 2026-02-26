import ApiCall from "../utils/ApiCall";

const menuEL = document.getElementById("menu");

const menusCall = new ApiCall("/menus?isActive=true");

const {
  data: {
    data: { items },
  },
} = await menusCall.get();

items.forEach(async (item) => {
  let template;
  if (item.hasSubmenu) {
    const subMenusCall = new ApiCall("/menus");
    const {
      data: {
        data: { submenus },
      },
    } = await subMenusCall.get(item.id);

    template = `
<li class="site-header__nav-item site-header__nav-item--active">
    <a class="site-header__nav-link ${
      item.hasSubmenu ? "site-header__nav-link--has-dropdown" : ""
    }" href="${item.link}">
    ${item.name}
    ${
      item.hasSubmenu
        ? `
        <svg
                    class="site-header__nav-caret"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.99904 11.1999C7.53237 11.1999 7.0657 11.0199 6.71237 10.6666L2.3657 6.31993C2.17237 6.12659 2.17237 5.8066 2.3657 5.61326C2.55904 5.41993 2.87904 5.41993 3.07237 5.61326L7.41904 9.95993C7.73904 10.2799 8.25904 10.2799 8.57904 9.95993L12.9257 5.61326C13.119 5.41993 13.439 5.41993 13.6324 5.61326C13.8257 5.8066 13.8257 6.12659 13.6324 6.31993L9.2857 10.6666C8.93237 11.0199 8.4657 11.1999 7.99904 11.1999Z"
                      fill="#717171"
                    />
                  </svg>
        `
        : ""
    }
    </a>
    ${
      item.hasSubmenu
        ? `
        <div class="site-header__dropdown">
                  <nav class="site-header__dropdown-nav">
                    <ul class="site-header__dropdown-list">

                    ${submenus
                      .map(
                        (submenu) => `
                            
                            <li class="site-header__dropdown-item body-sm">
                        <a class="site-header__dropdown-link" href="${submenu.link}"
                          >${submenu.name}</a
                        >
                      </li>
                            `,
                      )
                      .join("")}
                    </ul>
                  </nav>
                </div>
        `
        : ""
    }
</li>
`;
  } else {
    template = `
<li class="site-header__nav-item site-header__nav-item--active">
    <a class="site-header__nav-link ${
      item.hasSubmenu ? "site-header__nav-link--has-dropdown" : ""
    }" href="${item.link}">
    ${item.name}
    ${
      item.hasSubmenu
        ? `
        <svg
                    class="site-header__nav-caret"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.99904 11.1999C7.53237 11.1999 7.0657 11.0199 6.71237 10.6666L2.3657 6.31993C2.17237 6.12659 2.17237 5.8066 2.3657 5.61326C2.55904 5.41993 2.87904 5.41993 3.07237 5.61326L7.41904 9.95993C7.73904 10.2799 8.25904 10.2799 8.57904 9.95993L12.9257 5.61326C13.119 5.41993 13.439 5.41993 13.6324 5.61326C13.8257 5.8066 13.8257 6.12659 13.6324 6.31993L9.2857 10.6666C8.93237 11.0199 8.4657 11.1999 7.99904 11.1999Z"
                      fill="#717171"
                    />
                  </svg>
        `
        : ""
    }
    </a>
</li>
`;
  }

  menuEL.insertAdjacentHTML("beforeend", template);
});
