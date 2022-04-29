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

    var anchors = document.getElementsByTagName('a')

    for(var i = 0, len = anchors.length; i < len; i++) {
        var thisAnchor = anchors[i]
        thisAnchor.onclick = function () {
            var btn = this.parentNode.parentNode.querySelector('button span.title')
            btn.innerHTML = this.innerHTML
        }
    }

    
    // var el = document.getElementById('gridDemo')
    // var sortable = new Sortable(el, {
    //     animation: 150,
    //     ghostClass: 'monFuturPlace',
    //     easing: "cubic-bezier(1, 0, 0, 1)",
    // });

    // let planning = new Planning('.calendar')
    // planning.init()

    new Planning('.calendar').init()


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
                            <div>
                            
                                <div class="searchbarWrapper flex-row justify-content-center align-items-center ms-lg-5 ms-md-3">
                                    <span class="material-icons-outlined">search</span>
                                    <input class="ms-lg-2 ms-md-1" type="text" placeholder="Rechercher un streamable" aria-label="search">
                                </div>
                                
                                <div class="categoryWrapper row justify-content-center align-items-center">
                                    <a href="#" class="col-md-2 col-sm-4 col-6 category current">
                                        <div>
                                            <img src="../assets/media/img/placeholder/temp_cat1.png" alt="sport category">
                                            <span>Catégorie1</span>
                                        </div>
                                    </a>

                                    <a href="#" class="col-md-2 col-sm-4 col-6 category">
                                        <div>
                                            <img src="../assets/media/img/placeholder/temp_cat1.png" alt="sport category">
                                            <span>Catégorie2</span>
                                        </div>
                                    </a>

                                    <a href="#" class="col-md-2 col-sm-4 col-6 category">
                                        <div>
                                            <img src="../assets/media/img/placeholder/temp_cat1.png" alt="sport category">
                                            <span>Catégorie3</span>
                                        </div>
                                    </a>

                                    <a href="#" class="col-md-2 col-sm-4 col-6 category">
                                        <div>
                                            <img src="../assets/media/img/placeholder/temp_cat1.png" alt="sport category">
                                            <span>Catégorie4</span>
                                        </div>
                                    </a>

                                    <a href="#" class="col-md-2 col-sm-4 col-6 category">
                                        <div>
                                            <img src="../assets/media/img/placeholder/temp_cat1.png" alt="sport category">
                                            <span>Catégorie5</span>
                                        </div>
                                    </a>

                                    <a href="#" class="col-md-2 col-sm-4 col-6 category">
                                        <div>
                                            <img src="../assets/media/img/placeholder/temp_cat1.png" alt="sport category">
                                            <span>Catégorie6</span>
                                        </div> 
                                    </a>
                                </div>

                                <h5 class="m-3">Catégorie1</h5>

                                <div class="row catalogWrapper">
                                    <!-- begin::col -->
                                    <a href="./streamable.html" class="col-12 col-md-6 col-lg-4 col-xl-3">
                                        <!-- begin::streamable card -->
                                        <div class="streamable-card">
                                            
                                            <img src="../assets/media/img/placeholder/streamable.jpg" alt="Streamable picture">
                                                
                                            <div class="streamable-desc">
                                                <h6>
                                                    The Wild Things Are
                                                </h6>
                                                <span class="fw-bold" style="color:#42b740;">8.6</span>
                                            </div>
                                        </div>
                                        <!-- begin::streamable card -->
                                    </a>
                                    <!-- end::col-->
                                </div>

                            </div>
                        </div>
                    `)
                    modalCardBody.appendChild(modalContent)
                break;
                case 'add-Prog':
                    modalContent = stringToHtml(`
                        <div>

                            <div class="row justify-content-between align-items-center">
                                <div class="col-sm-8 col-md-6 col-12">
                                    <div class="form-group m-2">
                                        <label for="Pl-name" class="col-form-label fw-bold">Ajouter une Programmation</label>
                                        <input type="text" class="form-control" id="Pl-name" placeholder="Nom programmation">
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
                case 'rem-Prog':
                    modalContent = stringToHtml(`
                        <div class="d-flex flex-row justify-content-center align-items-center">
                            <button class="btn m-1 closeModal">Annuler</button>
                            <button class="tamerBtn m-1 closeModal">Supprimer</button>
                        </div>
                    `)
                    modalCardBody.appendChild(modalContent)
                break;
                case 'add-Cren':
                    modalContent = stringToHtml(`
                        <div>
                        <h6>Ajouter un créneau</h6>
                        <hr>
    
                        <div class="row">
                            <div class="col-12">
                                <div class="form-group d-flex flex-column m-2">
                                    <label for="day" class="col-form-label text-unactive">Playlists</label>
                                    <select class="loadSelect2" name="states[]" multiple="multiple" style="width:100%">
                                        <option value="all">Playlist 1</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        
    
                        <div class="row">
                            <div class="col-12">
                                <div class="form-group d-flex flex-column m-2">
                                    <label for="day" class="col-form-label text-unactive">Jours</label>
                                    <select class="loadSelect2" name="states[]" multiple="multiple" style="width:100%">
                                        <option value="all">Tous les jours</option>
                                        <option value="Lundi">Lundi</option>
                                        <option value="Mardi">Mardi</option>
                                        <option value="Mercredi">Mercredi</option>
                                        <option value="Jeudi">Jeudi</option>
                                        <option value="Vendredi">Vendredi</option>
                                        <option value="Samedi">Samedi</option>
                                        <option value="Dimanche">Dimanche</option>
                                    </select>
                                </div>
                            </div>
                        </div>
    
                        <div class="row">
                            <div class="col-md-6 col-sm-12">
                                <div class="form-group d-flex flex-column m-2">
                                    <label for="day" class="col-form-label text-unactive">Horaire début</label>
                                    <input type="time">
                                </div>
                                
                            </div>
    
                            <div class="col-md-6 col-sm-12">
                                <div class="form-group d-flex flex-column m-2">
                                    <label for="day" class="col-form-label text-unactive">Horaire fin</label>
                                    <input type="time">
                                </div>
                            </div>
                        </div>
    
                        <div class="row justify-content-end align-items-center mt-3">
                            <button class="tamerBtn closeModal">Ajouter</button>
                        </div>


                        </div>
                    `)
                    modalCardBody.appendChild(modalContent)
                    $('.loadSelect2').select2();
                    
                break;

                case 'add-Event':
                    modalContent = stringToHtml(`
                        <div>
                            <h6>Ajouter un Évènement</h6>
                            <hr>
        
                            <div class="row">
                                <div class="col-12">
                                    <div class="form-group d-flex flex-column m-2">
                                        <label for="day" class="col-form-label text-unactive">Playlists</label>
                                        <select class="loadSelect2" name="states[]" multiple="multiple" style="width:100%">
                                            <option value="all">Playlist 1</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-12">
                                    <div class="form-group d-flex flex-column m-2">
                                        <label for="day" class="col-form-label text-unactive">Jour</label>
                                        <input type="date">
                                    </div>
                                </div>
                            </div>
                            
                            <div class="row">
                                <div class="col-md-6 col-sm-12">
                                    <div class="form-group d-flex flex-column m-2">
                                        <label for="day" class="col-form-label text-unactive">Horaire début</label>
                                        <input type="time">
                                    </div>
                                    
                                </div>
        
                                <div class="col-md-6 col-sm-12">
                                    <div class="form-group d-flex flex-column m-2">
                                        <label for="day" class="col-form-label text-unactive">Horaire fin</label>
                                        <input type="time">
                                    </div>
                                </div>
                            </div>
        
                            
                        </div>
                    `)
                    modalCardBody.appendChild(modalContent)
                    $('.loadSelect2').select2();
                    
                break;
                case 'add-Screen':
                    modalContent = stringToHtml(`
                        <div>
                            <h6>Ajouter un Écran</h6>
                            <hr>
                            <div class="row">

                                <a href="#" dt-modal-size="w-50" class="col-lg-3 col-md-4 col-sm-6 openModal text-black">
                                    <div class="card screen">
                                        <div class="card-body">
                                            <span class="check material-icons mt-2 mb-2">check_circle</span>
                                            <span class="material-icons-outlined mt-2 mb-2">desktop_windows</span>
                                            <span>Tous</span>
                                        </div>
                            
                                    </div>
                                </a>

                                <a href="#" dt-modal-size="w-50" class="col-lg-3 col-md-4 col-sm-6 openModal text-black">
                                    <div class="card screen active">
                                        <div class="card-body">
                                            <span class="check material-icons mt-2 mb-2">check_circle</span>
                                            <span class="material-icons-outlined mt-2 mb-2">desktop_windows</span>
                                            <span>TV001</span>
                                        </div>
                            
                                    </div>
                                </a>

                                <a href="#" dt-modal-size="w-50" class="col-lg-3 col-md-4 col-sm-6 openModal text-black">
                                    <div class="card screen active">
                                        <div class="card-body">
                                            <span class="check material-icons mt-2 mb-2">check_circle</span>
                                            <span class="material-icons-outlined mt-2 mb-2">desktop_windows</span>
                                            <span>TV002</span>
                                        </div>
                            
                                    </div>
                                </a>

                                <a href="#" dt-modal-size="w-50" class="col-lg-3 col-md-4 col-sm-6 openModal text-black">
                                    <div class="card screen">
                                        <div class="card-body">
                                            <span class="check material-icons mt-2 mb-2">check_circle</span>
                                            <span class="material-icons-outlined text-unactive mt-2 mb-2">desktop_windows</span>
                                            <span>TV003</span>
                                        </div>
                            
                                    </div>
                                </a>

                                </div>
                            <div class="row justify-content-end align-items-center mt-3">
                                <button class="tamerBtn closeModal">Ajouter</button>
                            </div>
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