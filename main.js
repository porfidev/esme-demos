import './style.css'
import Swal from 'sweetalert2'

document.querySelector('#app').innerHTML = `
  <div>
  <h1>Demos para Esme 💞</h1>
      <button id="launchCustom">Custom Modal</button>
      <button id="launchBasic">Swal Error Modal</button>
      <details>
       <summary>Código Custom Modal</summary>
           <pre>
           const buttomCustomSwal = document.querySelector('#launchCustom');

            buttomCustomSwal.addEventListener('click', () =&gt; {
                Swal.fire({
                    html:
                        '&lt;div&gt;&lt;img src=&quot;/peach-goma.gif&quot; width=&quot;200&quot;&gt;&lt;/div&gt;' +
                        '&lt;b&gt;Warning&lt;/b&gt;, ' +
                        '&lt;p&gt;Are yoy sure to apply these changes? The information' +
                        'will be replace the previous one and you will not be able to' +
                        'go back.',
                    showCloseButton: true,
                    showCancelButton: true,
                    focusConfirm: false,
                    confirmButtonText:
                        'Cancel',
                    cancelButtonText:
                        'Apply',
                })
            })
            </pre>
       </details>
  </div>
`

const button = document.querySelector('#launchBasic');
const buttomCustomSwal = document.querySelector('#launchCustom');
button.addEventListener('click', () => {
    Swal.fire({
        title: 'Error!',
        text: 'Do you want to continue',
        icon: 'error',
        confirmButtonText: 'Cool'
    })
})

buttomCustomSwal.addEventListener('click', () => {
    Swal.fire({
        html:
            '<div><img src="peach-goma.gif" width="200"></div>' +
            '<b>Warning</b>, ' +
            '<p>Are yoy sure to apply these changes? The information' +
            'will be replace the previous one and you will not be able to' +
            'go back.',
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText:
            'Cancel',
        cancelButtonText:
            'Apply',
    })
})
