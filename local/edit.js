const mForm = document.querySelector("#my-form");
      const nameInput = document.querySelector("#name");
      const emailInput = document.querySelector("#email");
      const msg = document.querySelector(".msg");
      const userList = document.querySelector("#users");
      const storedUsers = JSON.parse(
        localStorage.getItem("userList")
      ) || [];
      function populateUserList() {
        userList.innerHTML = ""; 
        storedUsers.forEach((user, index) => {
          const listItem = document.createElement("li");
          const deleteButton = document.createElement("button");
          const editButton = document.createElement("button");
          listItem.textContent = `${user.name} : ${user.email}`;
          deleteButton.textContent = "Delete";
          deleteButton.setAttribute("data-index", index);
          editButton.textContent = "Edit";
          editButton.setAttribute("data-index", index);
          deleteButton.addEventListener("click", deleteUser);
          editButton.addEventListener("click", editUser);
          listItem.appendChild(deleteButton);
          listItem.appendChild(editButton);
          userList.appendChild(listItem);
        });
      }
      populateUserList(); 
      mForm.addEventListener("submit", onSub);
      function onSub(e) {
        e.preventDefault();
        if (nameInput.value === "" || emailInput.value === "") {
          msg.classList.add("error");
          msg.innerHTML = "Please enter all fields";
          setTimeout(() => msg.remove(), 3000);
        } else {
          const user = {
            name: nameInput.value,
            email: emailInput.value,
          };
          storedUsers.push(user);
          localStorage.setItem("userList", JSON.stringify(storedUsers));
          populateUserList();
          nameInput.value = "";
          emailInput.value = "";
        }
      }
      function deleteUser(e) {
        const index = e.target.getAttribute("data-index");
        storedUsers.splice(index, 1);
        localStorage.setItem("userList", JSON.stringify(storedUsers));
               populateUserList();
      }
      function editUser(e) {
        const index = e.target.getAttribute("data-index");
        const newEmail = prompt("Enter a new email address:");

        if (newEmail !== null) {
          storedUsers[index].email = newEmail;
          localStorage.setItem("userList", JSON.stringify(storedUsers));
          populateUserList();
        }
      }