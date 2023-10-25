//console.log(concatenateString('gif',3));

highlightLanguages(1);
let currentProjectNumber = 1;
let numOfProjects = 5;
let titleID = concatenateString('title',currentProjectNumber);
let gifID = concatenateString('gif',currentProjectNumber);

function rotateLeft()
{
    const previousWidth = parseInt(document.getElementById(gifID).width);

    document.getElementById(titleID).style.display = 'none';
    document.getElementById(gifID).style.display = 'none';

    if(currentProjectNumber == 1)
    {
        currentProjectNumber = numOfProjects;
    }
    else
    {
        currentProjectNumber--;
    }
    titleID = concatenateString('title',currentProjectNumber);
    gifID = concatenateString('gif',currentProjectNumber);

    document.getElementById(titleID).style.display = 'block';
    document.getElementById(gifID).style.display = 'block';
    highlightLanguages(currentProjectNumber);

    const width = document.getElementById(gifID).width;
    const changeInWidth =  (width - previousWidth) / 2;     // each button needs to move half of the change in width

    const originalLeftString = document.getElementById('rightButton').style.left;       // see what the left attribute is currently
    const leftValue = originalLeftString.substring(0, originalLeftString.length - 2);   // remove the "px" to just get the value
    const newPositionValue = parseInt(leftValue) + changeInWidth;                       // change that value based on the changeInWidth
    document.getElementById('leftButton').style.left = '-' + newPositionValue.toString() + 'px';    // implement the changes for the buttons
    document.getElementById('rightButton').style.left = newPositionValue.toString() + 'px';
}

function rotateRight()
{
    const previousWidth = parseInt(document.getElementById(gifID).width);

    document.getElementById(titleID).style.display = 'none';
    document.getElementById(gifID).style.display = 'none';

    if(currentProjectNumber == numOfProjects)
    {
        currentProjectNumber = 1;
    }
    else
    {
        currentProjectNumber++;
    }
    titleID = concatenateString('title',currentProjectNumber);
    gifID = concatenateString('gif',currentProjectNumber);

    document.getElementById(titleID).style.display = 'block';
    document.getElementById(gifID).style.display = 'block';
    highlightLanguages(currentProjectNumber);

    const width = document.getElementById(gifID).width;
    const changeInWidth =  (width - previousWidth) / 2;     // each button needs to move half of the change in width

    const originalLeftString = document.getElementById('rightButton').style.left;       // see what the left attribute is currently
    const leftValue = originalLeftString.substring(0, originalLeftString.length - 2);   // remove the "px" to just get the value
    const newPositionValue = parseInt(leftValue) + changeInWidth;                       // change that value based on the changeInWidth
    document.getElementById('leftButton').style.left = '-' + newPositionValue.toString() + 'px';    // implement the changes for the buttons
    document.getElementById('rightButton').style.left = newPositionValue.toString() + 'px';
}

function concatenateString(strg, idNUM)
{
    if(strg == 'title')
        return 'proj' + idNUM + 'Title';
    if(strg == 'gif')
        return 'proj' + idNUM + 'GIF';
}

function highlightLanguages(idNUM)
{
    darkenAllLanguages();
    if(idNUM == 1 || idNUM == 2)
    {
        document.getElementById('python').style.opacity = '100%';
        document.getElementById('python').style.borderStyle = 'solid';
        document.getElementById('python').style.borderWidth = '1px';
    }
    else if(idNUM == 3)
    {
        document.getElementById('java').style.opacity = '100%';
        document.getElementById('java').style.borderStyle = 'solid';
        document.getElementById('java').style.borderWidth = '1px';
    }
    else if(idNUM == 4)
    {
        document.getElementById('javascript').style.opacity = '100%';
        document.getElementById('javascript').style.borderStyle = 'solid';
        document.getElementById('javascript').style.borderWidth = '1px';

        document.getElementById('html').style.opacity = '100%';
        document.getElementById('html').style.borderStyle = 'solid';
        document.getElementById('html').style.borderWidth = '1px';

        document.getElementById('css').style.opacity = '100%';
        document.getElementById('css').style.borderStyle = 'solid';
        document.getElementById('css').style.borderWidth = '1px';
    }
    else if(idNUM == 5)
    {
        document.getElementById('html').style.opacity = '100%';
        document.getElementById('html').style.borderStyle = 'solid';
        document.getElementById('html').style.borderWidth = '1px';

        document.getElementById('css').style.opacity = '100%';
        document.getElementById('css').style.borderStyle = 'solid';
        document.getElementById('css').style.borderWidth = '1px';
    }
}

function darkenAllLanguages()
{
    document.getElementById('cplusplus').style.opacity = '30%';
    document.getElementById('cplusplus').style.borderWidth = '0px';
    
    document.getElementById('python').style.opacity = '30%';
    document.getElementById('python').style.borderWidth = '0px';
    
    document.getElementById('java').style.opacity = '30%';
    document.getElementById('java').style.borderWidth = '0px';
    
    document.getElementById('javascript').style.opacity = '30%';
    document.getElementById('javascript').style.borderWidth = '0px';
    
    document.getElementById('html').style.opacity = '30%';
    document.getElementById('html').style.borderWidth = '0px';
    
    document.getElementById('css').style.opacity = '30%';
    document.getElementById('css').style.borderWidth = '0px';
}