import nav_block from "./nav.js";

const header_block = Vue.component("header-block", {
    template: `
        <header class="header">
            <div class="header__inner">
                <div class="header__content">
                    <p class="logo">Natalie Holden</p>
                </div>
                <div class="header__content">
                    <nav-block></nav-block>
                </div>
            </div>
        </header>
    `,
});

export default header_block;
