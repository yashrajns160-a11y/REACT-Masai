


function TodoItem({ title, status, id , handleToggle , handleDelete}) {
    return (
        <div style={{  //  css property should be like this
            display :"flex",
            alignItems : "center",
            justifyContent : "center",
        }}>
            <p>
                {title} {"  ---->  "}
                {status ? "COMPLETED" : "NOT COMPLETED"}
            </p>
            <button onClick={() => handleToggle(id)}>TOGGLE</button>
            <button onClick={() => handleDelete(id)}>DELETE</button>
        </div>
    );
}
export default TodoItem;