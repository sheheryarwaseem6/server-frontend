

function getUser() {
    const url = "https://registration-assignment1.herokuapp.com/users"
    const result = document.getElementById("resultDiv")




    // axios({
    //     url: url,
    //     meth: "get",

    // }).then((res) => {
    //     console.log(res);
    // }).catch((err) => {

    //     console.log(err);
    // })

    //  axios({
    //     url: url,
    //     meth: "post",
    //     data={ name : name, email : email, address: address}
    // }).then((res))

    axios.get(url).then((response) => {
        // console.log(response)

        const users = response.data
        // console.log(users)
        const userList = users.map((user) => {
            return ` <tr> <td>${user.id}</td> <td> ${user.name} </td> <td> ${user.email} </td> <td> ${user.address} </td></tr>`

        })
        result.innerHTML = ""
        result.innerHTML = userList.join("")
    })




}

getUser()
const url2 = "https://registration-assignment1.herokuapp.com/user"

function addUser() {
    const name1 = document.getElementById("name").value
    const email = document.getElementById("email").value
    const address = document.getElementById("address").value

    if (name1 === "" || email === "" || address === "") {
        alert("Donot left empty field")

    }
    else {
        const userData = {
            name: name1,
            email: email,
            address: address

        }
        axios.post(url2, userData).then(() => {

            getUser();
        })
    }


}

function updateUser() {
    const id = document.getElementById("id").value;
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const updateUserURL = `https://registration-assignment1.herokuapp.com/user/${id}`;

    if (name === "" || email === "" || address === "" || id === "") {
        alert("Please Fill All the Fields");
    } else {
        const userData = {
            id: id,
            name: name,
            email: email,
            address: address,
        };

        axios.put(updateUserURL, userData).then((response) => {
            alert(`${userData.name} is Updated`);
            getUsers();
        });
    }

}

function deleteUser() {

    let id = document.getElementById("id").value;
    console.log(id);
    const deleteUserURL = `https://registration-assignment1.herokuapp.com/user/${id}`;

    if (id === "") {
        alert("Please Enter ID");
    } else {
        const userData = {
            id: id
        };

        axios.delete(deleteUserURL, userData).then((response) => {
            alert(`${userData.name} is Deleted`);
            getUsers();
        });
    }

}