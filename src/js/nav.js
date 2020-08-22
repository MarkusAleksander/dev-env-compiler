import project_data from "./project_data.js";

const nav_block = Vue.component("nav-block", {
    data: function () {
        return {
            projects: project_data.projects,
        };
    },
    template: `
        <nav class="nav">
            <ul class="nav__items">
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Blog</a>
                </li>
                <li>
                    <a href="#">Shop</a>
                </li>
                <li>
                    <p>Projects</p>
                    <ul>
                        <li v-for="project in projects" :key="project.id"><a :href="project.url">{{ project.title }}</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
        </nav>
    `,
});

export default nav_block;
