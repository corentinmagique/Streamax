document.addEventListener('DOMContentLoaded', ()=>{
    var el = document.getElementById('items');
    new Sortable(el, {
        animation: 150,
        ghostClass: 'bg-main'
    });

    let openAlerts = document.querySelectorAll('.openAlert')

    openAlerts.forEach((btn)=>{

        btn.addEventListener('click', ()=>{
            let id = btn.id
            let title = null
            let confirm_text = null
            switch(id)
            {
                case 'rem-Pl':
                    title = 'Êtes-vous sûr de vouloir supprimer la playlist ?'
                    confirm_text = 'Playlist supprimée !'
                    break;
                case 'rem-Stmb':
                    title = 'Êtes-vous sûr de vouloir supprimer le streamable de la playlist ?'
                    confirm_text = 'Streamable supprimé !'
                    break;
            }
            Swal.fire({
                title: title,
                showDenyButton: true,
                showCancelButton: false,
                confirmButtonText: 'Supprimer',
                denyButtonText: `Annuler`,
                cancelButtonColor: "#DD6B55",
                confirmButtonColor: "#3DB13D",
            }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    Swal.fire({
                        title: confirm_text,
                        confirmButtonColor: "#3DB13D",
                        confirmButtonText: "Merci",
                        icon: "success"
                    })
                }
            })
        })

        
    })



    
})