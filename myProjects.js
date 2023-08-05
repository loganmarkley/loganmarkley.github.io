//console.log(concatenateString('gif',3));

highlightLanguages(1);
let currentProjectNumber = 1;
let numOfProjects = 4;
let titleID = concatenateString('title',currentProjectNumber);
let gifID = concatenateString('gif',currentProjectNumber);

function rotateLeft()
{
    document.getElementById(titleID).style.display = 'none';
    document.getElementById(gifID).style.display = 'none';

    let previousWidth = parseInt(document.getElementById('backgroundRECT').style.width);

    if(currentProjectNumber == 1)
    {
        currentProjectNumber = numOfProjects;
    }
    else
        currentProjectNumber--;
    titleID = concatenateString('title',currentProjectNumber);
    gifID = concatenateString('gif',currentProjectNumber);

    document.getElementById(titleID).style.display = 'block';
    document.getElementById(gifID).style.display = 'block';
    highlightLanguages(currentProjectNumber);

    let width = document.getElementById(gifID).width + 10;
    let changeInWidth =  (width - previousWidth) / 2;
    document.getElementById('backgroundSVG').style.width = width;
    document.getElementById('backgroundRECT').style.width = width;

    let originalString = document.getElementById('rightButton').style.left;
    let newString = originalString.substring(0, originalString.length - 2);
    let tmpInt = parseInt(newString);
    tmpInt += changeInWidth;
    document.getElementById('leftButton').style.left = '-' + tmpInt.toString() + 'px';
    document.getElementById('rightButton').style.left = tmpInt.toString() + 'px';
}

function rotateRight()
{
    document.getElementById(titleID).style.display = 'none';
    document.getElementById(gifID).style.display = 'none';

    let previousWidth = parseInt(document.getElementById('backgroundRECT').style.width);

    if(currentProjectNumber == numOfProjects)
    {
        currentProjectNumber = 1;
    }
    else
        currentProjectNumber++;
    titleID = concatenateString('title',currentProjectNumber);
    gifID = concatenateString('gif',currentProjectNumber);

    document.getElementById(titleID).style.display = 'block';
    document.getElementById(gifID).style.display = 'block';
    highlightLanguages(currentProjectNumber);

    let width = document.getElementById(gifID).width + 10;
    let changeInWidth =  (width - previousWidth) / 2;
    document.getElementById('backgroundSVG').style.width = width;
    document.getElementById('backgroundRECT').style.width = width;

    let originalString = document.getElementById('rightButton').style.left;
    let newString = originalString.substring(0, originalString.length - 2);
    let tmpInt = parseInt(newString);
    tmpInt += changeInWidth;
    document.getElementById('leftButton').style.left = '-' + tmpInt.toString() + 'px';
    document.getElementById('rightButton').style.left = tmpInt.toString() + 'px';
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
    if(idNUM == 1)
    {
        document.getElementById('python').style.opacity = '100%';
        document.getElementById('python').style.borderStyle = 'solid';
        document.getElementById('python').style.borderWidth = '1px';
    }
    else if(idNUM == 2)
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