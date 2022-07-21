var stringToHtml = (template) => {
    const parser = new DOMParser()
    const element = parser.parseFromString(template, "text/html")
    return element.body.firstChild
}

var removeAllChildNodes =  (parent) => {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild)
    }
}


let modalDom = stringToHtml(`
    <div class="modal fade" id="modal" tabindex="-1" role="dialog" aria-labelledby="modal" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
            <div class="modal-content" role="document">
                <div class="modal-header">
                    <h5 class="modal-title" >Modal title</h5>
                    <a href="#" class="closeModal">
                        <span class="material-icons-outlined text-secondary">close</span>
                    </a>
                </div>
                <div class="modal-body">
                
                </div>
                <div class="modal-footer">
                
                </div>
            </div>
        </div>
    </div>
`)

document.documentElement.appendChild(modalDom)


window.addEventListener("DOMContentLoaded", (event) => {

    // var anchors = document.getElementsByTagName('a')

    // for(var i = 0, len = anchors.length; i < len; i++) {
    //     var thisAnchor = anchors[i]
    //     thisAnchor.onclick = function () {
    //         var btn = this.parentNode.parentNode.querySelector('button span.title')
    //         btn.innerHTML = this.innerHTML
    //     }
    // }

    
    // var el = document.getElementById('gridDemo')
    // var sortable = new Sortable(el, {
    //     animation: 150,
    //     ghostClass: 'monFuturPlace',
    //     easing: "cubic-bezier(1, 0, 0, 1)",
    // });

    // let planning = new Planning('.calendar')
    // planning.init()

    // new Planning('.calendar').init()


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
    let modal = document.querySelector('#modal')
    let modalBody = modal.querySelector('.modal-body')
    let modalFooter = modal.querySelector('.modal-footer')
    let openBtns = document.querySelectorAll('.openModal')
    let closeBtns = document.querySelectorAll('.closeModal')

    openBtns.forEach((el)=>{
        el.addEventListener('click', ()=>{

            let id = el.id
            let modalContent = null
            switch(id)
            {
                case 'add-Pl':
                    modalContent = stringToHtml(`
                        <div class="row" style="align-items: center;">
                            <div class="col-lg-6 col-12">
                                <div class="form-group m-2">
                                    <label for="pl-name" class="col-form-label">Nom de la playlist</label>
                                    <input type="text" class="form-control" id="pl-name" value="">
                                </div>
                            </div>
                            <div class="row justify-content-end">
                                <button class="tamerBtn">Créer</button>
                            </div>
                        </div>
                    `)
                    modal.querySelector('.modal-header .modal-title').innerText = 'Ajouter une playlist'
                    modalBody.appendChild(modalContent)
                break;
                case 'add-Stmb':
                    modalContent = stringToHtml(`
                    <div><div class="d-flex widget-title-wrapper flex-row m-3 justify-content-between align-items-center">
                        <h5 class="text-uppercase widget-title">Ma Bibliothèque</h5>
                        
                    </div>
    
                
    
                    <div class="row">
        
                        <a href="#" class="col-lg-3 col-md-6 col-12 streamable">
                            <div class="thumbnail mini">
                                <img src="../assets/media/img/placeholder/temp_vod2.jpg">
                                <div class="video-length badge">01:25</div>
                                <div class="video-hover">
                                    <span class="material-icons">add</span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-2 d-flex justify-content-center align-items-center">
                                    <img height="32px" class="m-2 author-pic rounded-circle" src="../assets/media/img/placeholder/nixia.png">
                                </div>
                                <div class="col-10">
                                    <div class="d-flex flex-column m-2 thumbnail-infos">
                                        <span class="name">Streamable1</span>
                                        <div class="author me-2">
                                            <span class="material-icons-outlined me-1">person</span>
                                            <span>Nixia</span>
                                        </div>
        
                                        <div class="row">
                                            <div class="views col-6">
                                                <span class="material-icons-outlined me-1">visibility</span>
                                                <span>153 vues</span>
                                            </div>
                                            <div class="date col-6">
                                                <span class="material-icons-outlined me-1">calendar_today</span>
                                                <span>8 mois</span>
                                            </div>
                                        </div>
                                        
                                        
                                    </div>
                                    
                                </div>
                            </div>
        
                        </a>

                        <a href="#" class="col-lg-3 col-md-6 col-12 streamable">
                            <div class="thumbnail mini">
                                <img src="../assets/media/img/placeholder/temp_vod2.jpg">
                                <div class="video-length badge">01:25</div>
                                <div class="video-hover">
                                    <span class="material-icons">add</span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-2 d-flex justify-content-center align-items-center">
                                    <img height="32px" class="m-2 author-pic rounded-circle" src="../assets/media/img/placeholder/nixia.png">
                                </div>
                                <div class="col-10">
                                    <div class="d-flex flex-column m-2 thumbnail-infos">
                                        <span class="name">Streamable1</span>
                                        <div class="author me-2">
                                            <span class="material-icons-outlined me-1">person</span>
                                            <span>Nixia</span>
                                        </div>
        
                                        <div class="row">
                                            <div class="views col-6">
                                                <span class="material-icons-outlined me-1">visibility</span>
                                                <span>153 vues</span>
                                            </div>
                                            <div class="date col-6">
                                                <span class="material-icons-outlined me-1">calendar_today</span>
                                                <span>8 mois</span>
                                            </div>
                                        </div>
                                        
                                        
                                    </div>
                                    
                                </div>
                            </div>
        
                        </a>

                        <a href="#" class="col-lg-3 col-md-6 col-12 streamable">
                            <div class="thumbnail mini">
                                <img src="../assets/media/img/placeholder/temp_vod2.jpg">
                                <div class="video-length badge">01:25</div>
                                <div class="video-hover">
                                    <span class="material-icons">add</span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-2 d-flex justify-content-center align-items-center">
                                    <img height="32px" class="m-2 author-pic rounded-circle" src="../assets/media/img/placeholder/nixia.png">
                                </div>
                                <div class="col-10">
                                    <div class="d-flex flex-column m-2 thumbnail-infos">
                                        <span class="name">Streamable1</span>
                                        <div class="author me-2">
                                            <span class="material-icons-outlined me-1">person</span>
                                            <span>Nixia</span>
                                        </div>
        
                                        <div class="row">
                                            <div class="views col-6">
                                                <span class="material-icons-outlined me-1">visibility</span>
                                                <span>153 vues</span>
                                            </div>
                                            <div class="date col-6">
                                                <span class="material-icons-outlined me-1">calendar_today</span>
                                                <span>8 mois</span>
                                            </div>
                                        </div>
                                        
                                        
                                    </div>
                                    
                                </div>
                            </div>
        
                        </a>

                        <a href="#" class="col-lg-3 col-md-6 col-12 streamable">
                            <div class="thumbnail mini">
                                <img src="../assets/media/img/placeholder/temp_vod2.jpg">
                                <div class="video-length badge">01:25</div>
                                <div class="video-hover">
                                    <span class="material-icons">add</span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-2 d-flex justify-content-center align-items-center">
                                    <img height="32px" class="m-2 author-pic rounded-circle" src="../assets/media/img/placeholder/nixia.png">
                                </div>
                                <div class="col-10">
                                    <div class="d-flex flex-column m-2 thumbnail-infos">
                                        <span class="name">Streamable1</span>
                                        <div class="author me-2">
                                            <span class="material-icons-outlined me-1">person</span>
                                            <span>Nixia</span>
                                        </div>
        
                                        <div class="row">
                                            <div class="views col-6">
                                                <span class="material-icons-outlined me-1">visibility</span>
                                                <span>153 vues</span>
                                            </div>
                                            <div class="date col-6">
                                                <span class="material-icons-outlined me-1">calendar_today</span>
                                                <span>8 mois</span>
                                            </div>
                                        </div>
                                        
                                        
                                    </div>
                                    
                                </div>
                            </div>
        
                        </a>

                        <a href="#" class="col-lg-3 col-md-6 col-12 streamable">
                            <div class="thumbnail mini">
                                <img src="../assets/media/img/placeholder/temp_vod2.jpg">
                                <div class="video-length badge">01:25</div>
                                <div class="video-hover">
                                    <span class="material-icons">add</span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-2 d-flex justify-content-center align-items-center">
                                    <img height="32px" class="m-2 author-pic rounded-circle" src="../assets/media/img/placeholder/nixia.png">
                                </div>
                                <div class="col-10">
                                    <div class="d-flex flex-column m-2 thumbnail-infos">
                                        <span class="name">Streamable1</span>
                                        <div class="author me-2">
                                            <span class="material-icons-outlined me-1">person</span>
                                            <span>Nixia</span>
                                        </div>
        
                                        <div class="row">
                                            <div class="views col-6">
                                                <span class="material-icons-outlined me-1">visibility</span>
                                                <span>153 vues</span>
                                            </div>
                                            <div class="date col-6">
                                                <span class="material-icons-outlined me-1">calendar_today</span>
                                                <span>8 mois</span>
                                            </div>
                                        </div>
                                        
                                        
                                    </div>
                                    
                                </div>
                            </div>
        
                        </a>

                        <a href="#" class="col-lg-3 col-md-6 col-12 streamable">
                            <div class="thumbnail mini">
                                <img src="../assets/media/img/placeholder/temp_vod2.jpg">
                                <div class="video-length badge">01:25</div>
                                <div class="video-hover">
                                    <span class="material-icons">add</span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-2 d-flex justify-content-center align-items-center">
                                    <img height="32px" class="m-2 author-pic rounded-circle" src="../assets/media/img/placeholder/nixia.png">
                                </div>
                                <div class="col-10">
                                    <div class="d-flex flex-column m-2 thumbnail-infos">
                                        <span class="name">Streamable1</span>
                                        <div class="author me-2">
                                            <span class="material-icons-outlined me-1">person</span>
                                            <span>Nixia</span>
                                        </div>
        
                                        <div class="row">
                                            <div class="views col-6">
                                                <span class="material-icons-outlined me-1">visibility</span>
                                                <span>153 vues</span>
                                            </div>
                                            <div class="date col-6">
                                                <span class="material-icons-outlined me-1">calendar_today</span>
                                                <span>8 mois</span>
                                            </div>
                                        </div>
                                        
                                        
                                    </div>
                                    
                                </div>
                            </div>
        
                        </a>
                       
                    </div></div>
    
                    `)
                    modal.querySelector('.modal-header .modal-title').innerText = 'Ajouter un streamable'
                    modal.querySelector('.modal-footer').appendChild(stringToHtml(`
                        <div class="d-flex flex-row justify-content-between align-items-center w-100">
                            <span class="text-secondary"><span class="selected_num">0</span> élement(s) selectionné(s)</span>
                            <button class="tamerBtn">Ajouter</button>
                        </div>
                    `))
                    modalBody.appendChild(modalContent)
                    var stmb_selected_num = 0

                    modalBody.querySelectorAll('.streamable').forEach((el)=>{
                        el.addEventListener('click', ()=>{
                            el.classList.toggle('selected')
                            stmb_selected_num = (el.classList.contains('selected')) ?  ++stmb_selected_num : --stmb_selected_num
                            modal.querySelector('.selected_num').innerText  = stmb_selected_num
                        })
                    })
                break;
                case 'add-prog':
                    modalContent = stringToHtml(`
                    <div class="row" style="align-items: center;">
                        <div class="col-lg-6 col-12">
                            <div class="form-group m-2">
                                <label for="pl-name" class="col-form-label">Nom de la programmation</label>
                                <input type="text" class="form-control" id="prog-name" value="">
                            </div>
                        </div>
                        <div class="row justify-content-end">
                            <button class="tamerBtn">Créer</button>
                        </div>
                    </div>
                    `)
                    modal.querySelector('.modal-header .modal-title').innerText = 'Ajouter une programmation'
                    modalBody.appendChild(modalContent)
                break;
                case 'prog-addPl':
                    modalContent = stringToHtml(`
                    <div><div class="d-flex widget-title-wrapper flex-row m-3 justify-content-between align-items-center">
                        <h5 class="text-uppercase widget-title">Mes playlists</h5>
                        
                    </div>
    
                    <div class="row">
                        <a href="#" class="col-lg-3 col-md-6 col-12 streamable">
                            <div class="thumbnail mini">
                                <img src="../assets/media/img/placeholder/temp_vod2.jpg">
                                <div class="video-length badge">5 vidéos</div>
                                <div class="video-hover">
                                    <span class="material-icons">add</span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-2 d-flex justify-content-center align-items-center">
                                    <img height="32px" class="m-2 author-pic rounded-circle" src="../assets/media/img/placeholder/nixia.png">
                                </div>
                                <div class="col-10">
                                    <div class="d-flex flex-column m-2 thumbnail-infos">
                                        <span class="name">Playlist1</span>
                                        <div class="author me-2">
                                            <span class="material-icons-outlined me-1">person</span>
                                            <span>Nixia</span>
                                        </div>

                                        <div class="row">
                                            <div class="views col-6">
                                                <span class="material-icons-outlined me-1">visibility</span>
                                                <span>153 vues</span>
                                            </div>
                                            <div class="date col-6">
                                                <span class="material-icons-outlined me-1">calendar_today</span>
                                                <span>8 mois</span>
                                            </div>
                                        </div>
                                        
                                        
                                    </div>
                                    
                                </div>
                            </div>

                        </a>
                        <a href="#" class="col-lg-3 col-md-6 col-12 streamable">
                            <div class="thumbnail mini">
                                <img src="../assets/media/img/placeholder/temp_vod4.jpg">
                                <div class="video-length badge">58 vidéos</div>
                                <div class="video-hover">
                                    <span class="material-icons">add</span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-2 d-flex justify-content-center align-items-center">
                                    <img height="32px" class="m-2 author-pic rounded-circle" src="../assets/media/img/placeholder/nixia.png">
                                </div>
                                <div class="col-10">
                                    <div class="d-flex flex-column m-2 thumbnail-infos">
                                        <span class="name">Playlist2</span>
                                        <div class="author me-2">
                                            <span class="material-icons-outlined me-1">person</span>
                                            <span>Nixia</span>
                                        </div>

                                        <div class="row">
                                            <div class="views col-6">
                                                <span class="material-icons-outlined me-1">visibility</span>
                                                <span>153 vues</span>
                                            </div>
                                            <div class="date col-6">
                                                <span class="material-icons-outlined me-1">calendar_today</span>
                                                <span>8 mois</span>
                                            </div>
                                        </div>
                                        
                                        
                                    </div>
                                    
                                </div>
                            </div>

                        </a>
                    </div></div>
    
                    `)
                    modal.querySelector('.modal-header .modal-title').innerText = 'Ajouter une playlist'
                    modal.querySelector('.modal-footer').appendChild(stringToHtml(`
                        <div class="d-flex flex-row justify-content-between align-items-center w-100">
                            <span class="text-secondary"><span class="selected_num">0</span> élement(s) selectionné(s)</span>
                            <button class="tamerBtn">Ajouter</button>
                        </div>
                    `))
                    modalBody.appendChild(modalContent)
                    var stmb_selected_num = 0

                    modalBody.querySelectorAll('.streamable').forEach((el)=>{
                        el.addEventListener('click', ()=>{
                            el.classList.toggle('selected')
                            stmb_selected_num = (el.classList.contains('selected')) ?  ++stmb_selected_num : --stmb_selected_num
                            modal.querySelector('.selected_num').innerText  = stmb_selected_num
                        })
                    })
                break;
                case 'prog-addScreen':
                    modalContent = stringToHtml(`
                    <div><div class="d-flex widget-title-wrapper flex-row m-3 justify-content-between align-items-center">
                        <h5 class="text-uppercase widget-title">Mes écrans</h5>
                        
                    </div>
    
                    <div class="row">
                        <a href="#" class="col-lg-3 col-md-6 col-12 screen">
                            <div class=" card device">
                                <div class="card-body">
                                    
                                    <span class="material-icons-outlined text-secondary">
                                        tv
                                    </span>
                                    
                                </div>

                                <div class="card-footer">
                                    
                                    <span class="name">
                                        Smart TV de Carine
                                    </span>
                                    <span class="infos">
                                        02b:4789::987
                                    </span>
                                    
                                </div>
                            </div>

                        </a>

                        <a href="#" class="col-lg-3 col-md-6 col-12 screen">
                            <div class=" card device">
                                <div class="card-body">
                                    
                                    <span class="material-icons-outlined text-secondary">
                                        smartphone
                                    </span>
                                    
                                </div>

                                <div class="card-footer">
                                    
                                    <span class="name">
                                        Smartphone de Carine
                                    </span>
                                    <span class="infos">
                                        02b:4789::987
                                    </span>
                                    
                                </div>
                            </div>

                        </a>

                        <a href="#" class="col-lg-3 col-md-6 col-12 screen">
                            <div class=" card device">
                                <div class="card-body">
                                    
                                    <span class="material-icons-outlined text-secondary">
                                        laptop
                                    </span>
                                    
                                </div>

                                <div class="card-footer">
                                    
                                    <span class="name">
                                        Ordinateur de Carine
                                    </span>
                                    <span class="infos">
                                        02b:4789::987
                                    </span>
                                    
                                </div>
                            </div>

                        </a>
                    </div></div>
    
                    `)
                    modal.querySelector('.modal-header .modal-title').innerText = 'Ajouter un écran'
                    modal.querySelector('.modal-footer').appendChild(stringToHtml(`
                        <div class="d-flex flex-row justify-content-between align-items-center w-100">
                            <span class="text-secondary"><span class="selected_num">0</span> élement(s) selectionné(s)</span>
                            <button class="tamerBtn">Ajouter</button>
                        </div>
                    `))
                    modalBody.appendChild(modalContent)
                    var stmb_selected_num = 0

                    modalBody.querySelectorAll('.screen').forEach((el)=>{
                        el.addEventListener('click', ()=>{
                            el.classList.toggle('selected')
                            stmb_selected_num = (el.classList.contains('selected')) ?  ++stmb_selected_num : --stmb_selected_num
                            modal.querySelector('.selected_num').innerText  = stmb_selected_num
                        })
                    })
                break;
                   

            }

            
            $(modal).modal('show')

            closeBtns.forEach((btn)=>{
                btn.addEventListener('click', ()=>{
                    $(modal).modal('hide')
                    removeAllChildNodes(modalBody)
                    removeAllChildNodes(modalFooter)
                    
                })
            })

        })
    })

})