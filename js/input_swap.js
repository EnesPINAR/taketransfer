function switchText() {
    var obj1 = document.getElementById('departure').value;
    var obj2 = document.getElementById('arrival').value;

    var temp = obj1;
    obj1 = obj2;
    obj2 = temp;
    
    // Save the swapped values to the input element.
    document.getElementById('departure').value = obj1;
    document.getElementById('arrival').value = obj2;
}