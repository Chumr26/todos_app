import html from '../core.js'
import { connect } from '../store.js'

const connector = connect()

function Footer({ todos,filter, filters }) {
    return html`
    <footer class="footer">
        <span class="todo-count">
            <strong>${todos.filter(filters.active).length}</strong> item left
        </span>
        <ul class="filters">
            ${Object.keys(filters).map(type => html`
                <li>
                    <a class="${type === filter && 'selected'}" 
                        href="#"
                        onclick="dispatch('SWITCH_FILTER', '${type}')"
                    >
                        ${type[0].toUpperCase() + type.slice(1)}
                    </a>
                </li>
            `)}            
        </ul>
        <button 
            class="clear-completed" 
            ${todos.every(filters.active) && 'hidden'}
            onclick="dispatch('CLEAR_COMPLETED')"
            >
                Clear completed
        </button>
    </footer>
    `
};

export default connector(Footer)