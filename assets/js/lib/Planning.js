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

class Planning{
    constructor(element, args)
    {

        let opts = {
            days : (args != undefined && args.hasOwnProperty("days")) ? args.days : 
            [
                '', 
                'Lundi',
                'Mardi', 
                'Mercredi', 
                'Jeudi',
                'Vendredi',
                'Samedi',
                'Dimanche'
            ],
            time_format : (args != undefined && args.hasOwnProperty("time_format")) ? args.time_format : 24,
            time_slot : (args != undefined && args.hasOwnProperty("time_slot")) ? args.time_slot : 
            [
                '00:00',
                '04:00',
                '08:00', 
                '12:00',
                '16:00',
                '20:00',
                '00:00'
            ]
        }

        this.days = opts.days
        this.time_format = opts.time_format
        this.time_slot = opts.time_slot
        this.container = document.querySelector(element)
        this.container.style.height = '100%'

        this.td_height = 0

        this.selected_td = {
            element : null,
            x : 0,
            y : 0
        }

        this.modal = null

    }

    init()
    {
        this.initTable()
        this.initModal()
    }

    initModal()
    {
        let modal = stringToHtml(`
        <div class="modal fade" id="planning_modal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Ajouter un créneau</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">

                        <div class="d-flex align-items-center">

                            <input type="time" class="start_time" min="${this.time_slot[0]}" max="${this.time_slot[this.time_slot.length - 1]}">
                            <input type="time" class="end_time">
                            <input type="color" class="color">

                        </div>
                        
                    </div>
                    <div class="modal-footer">
                        <button id="addTimeSlot" class="tamerBtn">Ajouter</button>
                    </div>
                </div>
            </div>
        </div>
        `)

        document.documentElement.appendChild(modal)
        this.modal = document.documentElement.querySelector('#planning_modal')

        this.modal.querySelector('#addTimeSlot').addEventListener('click', ()=>{
            $(this.modal).modal('hide')
            
            this.addTimeSlot(
                modal.querySelector('.start_time').value,
                modal.querySelector('.end_time').value,
                modal.querySelector('.color').value
            )
        })
    }

    initTable()
    {

        let table = stringToHtml(`
            <table class="planning">
                <thead>
                    <tr>

                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        `)

        let thead = table.querySelector('thead tr')
        let tbody = table.querySelector('tbody')

        let row_number = this.time_format / this.time_slot
        // let starting_hour = 8

        this.days.forEach((days)=>{
            let th = document.createElement('th')
            th.style.width = `calc( 100% / ${this.days.length})`
            // th.style.maxheight = `50px`
            th.innerText = days
            thead.appendChild(th)
        })

        this.time_slot.forEach((slot)=>{
            let tr = document.createElement('tr')
            for(let j = 0; j < this.days.length;++j)
            {
                let td = document.createElement('td')
                td.style.height = `calc( 100% / ${this.time_slot.length})`
                this.td_height = parseFloat(td.style.height.replace('calc(', ''))
                td.innerHTML = (j==0) ? slot : 
                td.innerHTML = `
                    <span class="material-icons-outlined"> 
                        add
                    </span>
                `
                td.addEventListener('click', ()=>{
                    $(this.modal).modal('show')
                    this.selected_tdPos = {
                        element : td,
                        x : this.FindColPos(td),
                        y : this.FindRowPos(td)
                    }
                })
                tr.appendChild(td)
                
            }
            tbody.appendChild(tr)
        })

        // let tr = document.createElement('tr')
        // for(let j = 0; j < this.days.length;++j)
        // {
        //     let td = document.createElement('td')
        //     td.style.height = `100%`
        //     td.innerHTML = `
        //         <span class="material-icons-outlined"> 
        //             add
        //         </span>
        //     `
        //     td.addEventListener('click', ()=>{
        //         $(this.modal).modal('show')
        //         this.selected_tdPos = {
        //             element : td,
        //             x : this.FindColPos(td),
        //             y : this.FindRowPos(td)
        //         }
        //     })
        //     tr.appendChild(td)
        // }
        // tbody.appendChild(tr)

        this.container.appendChild(table)

    }   

    addTimeSlot(start_time, end_time, color)
    {   
        let slot_card = stringToHtml(`
            <div class="card slot" style="background-color: ${color}">
                <span class="time text-white">
                    ${start_time} à ${end_time}
                </span>
                    
            </div>
        `)

        let second_number = this.stringToTime(end_time) - this.stringToTime(start_time)
        let height = ( second_number * 100 ) / 86400

        let pos_x = this.selected_tdPos.element.getBoundingClientRect().left -  this.selected_tdPos.element.getBoundingClientRect().width - 12
        let pos_y = ((this.time_slot.length * 116.25) * second_number) / 86400
        slot_card.style.width = `calc( calc( 100% / ${this.days.length}) - ${10}px )`
        slot_card.style.height = `${height}%`
        slot_card.style.top = `${pos_y}x`
        slot_card.style.left = pos_x
        
        this.container.appendChild(slot_card)
    }

    stringToTime(timeString)
    {
        let split = timeString.split(':')
        return split[0] * 3600 + split[1] * 60
    }

    FindColPos(element) {

        var colPos = 0;
        var prev = element.previousSibling;
    
        while (prev) {
            if (prev.nodeType == 1 && prev.nodeName.match(/t[dh]/i)) {
                colPos++;
            }
            prev = prev.previousSibling;
        }
    
        return colPos;
    }
    
    FindRowPos(element) {
    
        var rowPos = 0;
        var prev = element.parentNode.previousSibling;
    
        while (prev) {
            if (prev.nodeType == 1 && prev.nodeName.match(/tr/i)) {
                rowPos++;
            }
            prev = prev.previousSibling;
        }
    
        return rowPos;
    }

}