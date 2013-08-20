// JavaScript Document
// x la false ----- o la true

function ban_co()
{
	this.arr_ban_co= [];
	for(var i=0;i<50;i++)
	{
		this.arr_ban_co[i]= new Array(50);
	}
}
ban_co.prototype.tick_xo= function(_row,_col,xoro)
{
		this.arr_ban_co[_row][_col]=xoro;	
}

ban_co.prototype.check_danh_duoc= function (_row,_col)
{
	if(this.arr_ban_co[_row][_col]!=undefined)
	{
		return false;
	}
	else
	{
		return true;
	}
}

ban_co.prototype.check_win= function(_row,_col,xoro)
{
	var arr_ngang=[];
	for(var i=0;i<9;i++)
	{
		
		if(_col<4)
		{
			arr_ngang[i]=this.arr_ban_co[_row][i];
		}
		else
		{
			arr_ngang[i]=this.arr_ban_co[_row][_col-4+i];
		}
		
		
	}
	
	var arr_doc=[];
	for(var i=0;i<9;i++)
	{
		if(_row<4)
		{
		arr_doc[i]=this.arr_ban_co[i][_col];
		}
		else
		{
			arr_doc[i]=this.arr_ban_co[_row-4+i][_col];
		}
		
	}
	
	var arr_cheo_ngang=[];
	for(var i=0;i<9;i++)
	{	
		
		
		if(_row<4)
		{
			arr_cheo_ngang[i]=this.arr_ban_co[i][_col-_row+i];
		}
		else
		{
			arr_cheo_ngang[i]=this.arr_ban_co[_row-4+i][_col-4+i];
		}
			
	}
	
	var arr_cheo_doc=check_doc(_col,_row,this.arr_ban_co);
	
	
	
	if(check_lien_tuc(arr_ngang,xoro)==true || check_lien_tuc(arr_doc,xoro)==true ||check_lien_tuc(arr_cheo_ngang,xoro)==true || check_lien_tuc(arr_cheo_doc,xoro)==true)
	{
		console.log("---da chien thang",xoro);
	}
	
	//console.log(check_lien_tuc(arr_cheo_ngang,xoro));
}

function check_doc(_col,_row,arr_ban_co)
{
	var arr_cheo_doc=[];
	
	//console.log(_row,_col);	
	
	if(_col>4 && _row>4)
	{
				for(var i=0;i<9;i++)
				{
					arr_cheo_doc[i]=arr_ban_co[_row-4+i][_col-4+i]
				}
		
	}
	else
	{
		for(var i=0;i<_col+_row+2;i++)
		{
			arr_cheo_doc[i]=arr_ban_co[i][_col+_row-i]
		}	
	}
	
	return arr_cheo_doc;
}

function check_lien_tuc(array,xoro)
{
	console.log(array,xoro);
	var t=0;
	var trueORfalse=false;
	
	for(var i=0;i<array.length;i++)
	{
		if(t==5)
		{
			trueORfalse=true;
			break;
			
		}
		else
		{
			if(array[i]==xoro)
			{
				
				t++;
				
			}
			else
			{
				t=0;
			}
		}
	}
	//return t;
	return trueORfalse;
}