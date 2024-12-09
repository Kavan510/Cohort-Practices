const fs=require("fs");
const {Command} =require("commander");
const program =new Command();

const FILE= 'todo.json';
function readTodo(){
  if(!fs.existsSync(FILE)) {
    return [];
  }
const data= fs.readFileSync(FILE,"utf-8");

return JSON.parse(data || '[]');

}

function writeTodo(task){
  fs.writeFileSync(FILE,JSON.stringify(task,null,2),"utf-8");
}


program.name('todo')
.description('CLI based todo functoins')
.version('1.0.0');

program.command('add')
.description('Add Task to todo list')
.argument('<task>', 'the task description')
.action((task)=>{
  const list=readTodo();
  list.push({task,done:false}); //pushing the object inside to do list 
  writeTodo(list);
  console.log(`Add todo: "${task}"`);

});

program.command('delete')
.description('Delete task from list')
.argument('<index>' ,parseInt)
.action((index)=>{
  const list=readTodo();
  if(index<0 || index>=list.length){
    console.log('invalid index provided');
    return;
  }
  const delInd = list.splice(index,1);
  writeTodo(list);
  console.log(`Deleted the "${index}" from todo list` );


})
program.parse();
