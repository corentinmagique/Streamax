document.addEventListener('DOMContentLoaded', ()=>{

    let openAlerts = document.querySelectorAll('.openAlert')

    openAlerts.forEach((btn)=>{

        btn.addEventListener('click', ()=>{
            let id = btn.id
            let title = null
            let confirm_text = null
            switch(id)
            {
                case 'rem-Prog':
                    title = 'Êtes-vous sûr de vouloir supprimer la programmation ?'
                    confirm_text = 'Programmation supprimée !'
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

    $('.days').select2().val(['Lundi', 'Mardi', 'Dimanche']).trigger('change')



    
})