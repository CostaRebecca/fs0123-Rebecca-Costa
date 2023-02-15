
let arrTask = [];


class ListaTask{
    constructor(_task){
        this.nome = _task;
        this.completed =false;
    }

     aggiungiTask(){
        let inputTask = document.querySelector('#toDo');
        let task = new ListaTask(inputTask.value);
        arrTask.push(task);
        console.log(arrTask);
        inputTask.value = '';
        let div = document.createElement("div");
        div.textContent = task.nome;
        let button = document.createElement('button'); 
        button.textContent = 'Rimuovi Task'; 
        button.setAttribute('onClick', 'rimuoviTask(this.parentNode)'); 
        div.appendChild(button); 
        document.querySelector('.task').appendChild(div);
        
  } 
}
function aggiungiTask() {
    let attivita = new ListaTask();
    attivita.aggiungiTask();
}
function rimuoviTask(div) {
    div.remove(); 
  }
  
