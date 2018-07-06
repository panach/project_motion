const sel = (target) => { return document.getElementsByClassName(target)},
    outline = sel('outline')[0],
    btn_show = sel('btn_show')[0],
    ipt_pass = sel('ipt_pass')[0];

const btnAction = {
    toggleMotion: () => {
        console.log('toggleClass');
        outline.classList.toggle('active');
    },
    changeAttr: () => {
        console.log('changeAttr');
        let att = () => {
            return ipt_pass.getAttribute('type') == 'password' ? 'text' : 'password'
        }
        ipt_pass.setAttribute('type', att());
    },
    run: () => {
        btnAction.toggleMotion();
        btnAction.changeAttr();
    },
};
btn_show.addEventListener('click', () => {
    console.log('click');
    btnAction.run();
});