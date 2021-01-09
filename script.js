const user = {
  id : 5,
  age: 33,
  firstName: 'Tom',
  lastName: 'Smit',
  getFullName: function(){ 
      return `${this.firstName} ${this.lastName}`;
  }
};
const userClassName = "user-info";
const styleObj = {
  color:'red', 
  fontFamily:'Verdana'
};
    
ReactDOM.render(
    <div className={userClassName}  style={styleObj}>
            <p>Полное имя: {user.getFullName()}</p>
            <p>Возраст: {user.age}</p>
    </div>,
    document.getElementById("app")
)
