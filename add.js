let exp = 0.00;
        let inc = 0.00;

        function Hello() {
            let details = document.getElementById("input1").value;
            let expense = document.getElementById("input2").value;
            let select = document.getElementById("type").value;
            let date = "20.3.19";
            let sublistContent = document.createElement("div");
            sublistContent.classList.add("sublist-content", "flex-space");
            
            if (select == "Income") {
                inc += parseFloat(expense);
            } else {
                exp += parseFloat(expense);
                sublistContent.classList.add("sublist-content1", "flex-space");
            }

            document.getElementById("money-plus").innerHTML = `+$${inc.toFixed(2)}`;
            document.getElementById("money-minus").innerHTML = `-$${exp.toFixed(2)}`;

            let list = document.getElementById("list");
            list.appendChild(sublistContent);
            sublistContent.innerHTML = `<p class="product">${date}</p><p class="product">${details}</p><p class="product">\$${expense}</p>`;
            
            // Adding delete button
            let deleteButton = document.createElement("a");
            deleteButton.onclick = function() {
                let v=confirm("Want to delete this particular data?");
                if(v)
                {
                list.removeChild(sublistContent);
                if (select == "Income") {
                    inc -= parseFloat(expense);
                    document.getElementById("money-plus").innerHTML = `+$${inc.toFixed(2)}`;
                } else {
                    exp -= parseFloat(expense);
                    document.getElementById("money-minus").innerHTML = `-$${exp.toFixed(2)}`;
                }
            }
            };
            sublistContent.appendChild(deleteButton);
        }