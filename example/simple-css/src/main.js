var [content, counter] = ['<tr>', 0];
for(let i = 0; i < 6; i++)
{
    content += (temp(data[i]));
    if(counter>=2)
    {
        content +='</tr><tr>';
        counter = 0;
    } else counter++;
    
}
document.getElementById('table-content').innerHTML = content + '</tr>';