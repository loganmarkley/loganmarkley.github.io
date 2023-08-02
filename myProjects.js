//console.log(concatenateString('gif',3));

let currentProjectNumber = 1;
let numOfProjects = 3;
let titleID = concatenateString('title',currentProjectNumber);
let gifID = concatenateString('gif',currentProjectNumber);

function rotateLeft()
{
    document.getElementById(titleID).style.display = 'none';
    document.getElementById(gifID).style.display = 'none';

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

}

function rotateRight()
{
    document.getElementById(titleID).style.display = 'none';
    document.getElementById(gifID).style.display = 'none';

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
}

function concatenateString(strg, idNUM)
{
    if(strg == 'title')
        return 'proj' + idNUM + 'Title';
    if(strg == 'gif')
        return 'proj' + idNUM + 'GIF';
}