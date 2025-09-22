import React, { useEffect } from 'react'
import { HiMiniPlus, HiOutlineTrash } from 'react-icons/hi2'

const OptionImageSelector = ({imageList,setImageList}) => {
    //Funciton to handle adding an image
    const handleAddImage=(event)=>{
      const file=event.target.files[0];
      // console.log(file,"file")
      if(file && imageList.length < 4){
        const reader=new FileReader(); //FileReader is a built-in JavaScript object that allows reading the contents of files.
        reader.onload=()=>{  //This code is executed once the file has been fully read.
            //Add object with base 64 and file to the array
            setImageList([
                ...imageList,
                {base64:reader.result ,file}
            ]);
        };
        reader.readAsDataURL(file); //This method reads the file and returns its content as a base64-encoded string.
        event.target.value=null;
      }
    }
    // useEffect(() => {
    //     console.log("Updated imageList:", imageList);
    //   }, [imageList]);
      

    //function to handle deleting an image
    const handleDeleteImage=(index)=>{
      const updatedList=imageList.filter((_,idx)=> idx!==index);
      setImageList(updatedList);
    }
  return (
    <div>
      {imageList?.length > 0 && (
        <div className="grid grid-cols-2 gap-2 mb-4">
        {imageList.map((item,index)=>(
        <div key={index} className="bg-gray-600/10 rounded-md relative">
          <img src={item.base64} alt={`Selected_${index}`} className="w-full h-36 object-contain rounded-md" />
          <button
            onClick={() => handleDeleteImage(index)}
            className="text-red-500 bg-gray-100 rounded-full p-2 absolute top-2 right-2 cursor-pointer"
          >
            <HiOutlineTrash className="text-lg" />
          </button>
        </div>
      ))}
      </div>
      )}
      {imageList.length < 4 && (
        <div className="flex items-center gap-5">
          <input
            type="file"
            accept="image/jpeg,image/png"
            onChange={handleAddImage}
            className="hidden"
            id="imageInput"
          />
          <label htmlFor="imageInput" className="btn-small text-nowrap py-1 cursor-pointer">
            <HiMiniPlus className="text-lg" />
            Select Image
          </label>
        </div>
      )}
    </div>
  );
}

export default OptionImageSelector
