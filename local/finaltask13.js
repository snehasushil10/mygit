const mForm = document.querySelector("#my-form");
      const nameInput = document.querySelector("#name");
      const emailInput = document.querySelector("#email");
      const msg = document.querySelector(".msg");
      const userList = document.querySelector("#users");

      // Load user data from localStorage when the page loads or initialize an empty array
      const storedUsers = JSON.parse(
        localStorage.getItem("userList")
      ) || [];

      // Populate the user list with stored data
      function populateUserList() {
        userList.innerHTML = ""; // Clear the existing list

        storedUsers.forEach((user, index) => {
          const listItem = document.createElement("li");
          const deleteButton = document.createElement("button");

          // Display user data
          listItem.textContent = `${user.name} : ${user.email}`;

          // Create a delete button with a data-index attribute to store the user index
          deleteButton.textContent = "Delete";
          deleteButton.setAttribute("data-index", index);

          // Add a click event listener to the delete button
          deleteButton.addEventListener("click", deleteUser);

          // Append the delete button to the list item
          listItem.appendChild(deleteButton);

          // Append the list item to the user list
          userList.appendChild(listItem);
        });
      }

      populateUserList(); // Initial population of the user list

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

          // Push the user object to the storedUsers array
          storedUsers.push(user);

          // Store the updated user data in localStorage
          localStorage.setItem("userList", JSON.stringify(storedUsers));

          // Update the user list in the UI
          populateUserList();

          nameInput.value = "";
          emailInput.value = "";
        }
      }

      // Function to delete a user
      function deleteUser(e) {
        const index = e.target.getAttribute("data-index");

        // Remove the user from the storedUsers array
        storedUsers.splice(index, 1);

        // Store the updated user data in localStorage
        localStorage.setItem("userList", JSON.stringify(storedUsers));

        // Update the user list in the UI
        populateUserList();
      }