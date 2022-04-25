import { Wrapper, Success, Text, Error } from "./styles";

export const success = (message) => {
    if (document.querySelector('.lofty-message-wrapper')) {
        const wrapper = document.querySelector('.lofty-message-wrapper')
        const content = '<div class="lofty-message-box lofty-message-success"><span>'+message+'</span></div>';
        wrapper.innerHTML = content
    } else {
        const appWrapper = document.getElementById('root')
        const wrapper = document.createElement("div");
        wrapper.classList.add("lofty-message-wrapper")
        appWrapper.appendChild(wrapper)

        const content = '<div class="lofty-message-box lofty-message-success"><span>'+message+'</span></div>';
        wrapper.innerHTML = content
    }
}

export const error = (message) => {
    let displayMessage = "An error occurred";
    displayMessage = message

    if (document.querySelector('.lofty-message-wrapper')) {
        const wrapper = document.querySelector('.lofty-message-wrapper')
        const content = '<div class="lofty-message-box lofty-message-error"><span>'+displayMessage+'</span></div>';
        wrapper.innerHTML = content
    } else {
        const appWrapper = document.getElementById('root')
        const wrapper = document.createElement("div");
        wrapper.classList.add("lofty-message-wrapper")
        appWrapper.appendChild(wrapper)

        const content = '<div class="lofty-message-box lofty-message-error"><span>'+displayMessage+'</span></div>';
        wrapper.innerHTML = content
    }
}

export default {success, error}
