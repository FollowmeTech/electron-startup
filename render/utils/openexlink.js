const shell = require('electron').shell;

export default {
    linksinit() {
        document.addEventListener('click', function (e) {
            var link = e.target,
                url = link.getAttribute('href');
            if (link.tagName.toLowerCase() == 'a' && url.indexOf('http') === 0) {
                e.preventDefault();
                shell.openExternal(url);
            }
        })
    }
}