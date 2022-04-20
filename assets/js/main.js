let stringToHtml = (template) => {
    const parser = new DOMParser()
    const element = parser.parseFromString(template, "text/html")
    return element.body.firstChild
}

let removeAllChildNodes =  (parent) => {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild)
    }
}


let modalDom = stringToHtml(`
    <div id="modal" class="">
        <div id="header">
        </div>
        <div id="modal-container" class="d-flex flex-column justify-content-center align-items-center animate__animated animate__fadeIn">
            <div class="card">
                <div class="card-header d-flex justify-content-end">
                    <a href="#" class="closeModal"><span class="material-icons-outlined text-unactive">close</span></a>
                </div>
                <div class="card-body">
                    
                </div>
            </div>
        </div>
    </div>
`)

document.querySelector('body').appendChild(modalDom)


window.addEventListener("DOMContentLoaded", (event) => {
    /* More elements */
    let moreBtn = document.querySelector('.moreBtn')
    let moreMenu = document.querySelector('.moreMenu')
    let movDisp = document.querySelector('.movDisp')

    if(moreBtn)
    {
        moreBtn.addEventListener('click', (event)=>{
            moreMenu.classList.toggle('d-none')
        })

        movDisp.addEventListener('mouseleave', ()=>{
            moreMenu.classList.add('d-none')
        })
    }

    /*Modal elements */
    let openModals = document.querySelectorAll('.openModal')
    let modalContainer = document.querySelector('#modal')
    let modalCard = modalContainer.querySelector('.card')
    let modalCardBody = modalCard.querySelector('.card-body')

    openModals.forEach((el)=>{
        el.addEventListener('click', ()=>{

            let id = el.id
            let modalSize = el.getAttribute('dt-modal-size')
            let modalContent = null


            modalCard.classList.remove(modalSize)
            modalCard.classList.add(modalSize)
            
            modalContainer.classList.add('active')

            switch(id)
            {
                case 'add-Pl':
                    modalContent = stringToHtml(`
                        <div>

                            <div class="row justify-content-between align-items-center">
                                <div class="col-sm-8 col-md-6 col-12">
                                    <div class="form-group m-2">
                                        <label for="Pl-name" class="col-form-label fw-bold">Ajouter une Playlist</label>
                                        <input type="text" class="form-control" id="Pl-name" placeholder="Nom playlist">
                                    </div>
                                </div>

                            </div>

                            <div class="row justify-content-end align-items-center">
                                <button class="tamerBtn closeModal">Ajouter</button>
                            </div>

                        </div>
                    `)
                    modalCardBody.appendChild(modalContent)
                break;
                case 'rem-Pl':
                    modalContent = stringToHtml(`
                        <div class="d-flex flex-row justify-content-center align-items-center">
                            <button class="btn m-1 closeModal">Annuler</button>
                            <button class="tamerBtn m-1 closeModal">Supprimer</button>
                        </div>
                    `)
                    modalCardBody.appendChild(modalContent)
                break;
                case 'add-Stbl':
                    modalContent = stringToHtml(`
                        <div class="d-flex flex-row justify-content-center align-items-center">
                            
                        </div>
                    `)
                    modalCardBody.appendChild(modalContent)
                break;
            }

            let closeModal = document.querySelectorAll('.closeModal')

            closeModal.forEach((el)=>{
                el.addEventListener('click', ()=>{
                    modalContainer.classList.remove('active')
                    modalCard.classList.remove(modalSize)
                    removeAllChildNodes(modalCardBody)
                })
            })

        })
    })

    
})