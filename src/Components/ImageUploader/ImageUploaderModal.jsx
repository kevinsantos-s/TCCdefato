import React, { useState, useEffect } from "react";
import './ImageUploader.css';

const ImageUploaderModal = ({ setFile, setImage, chosenImage }) => {
    const [currentFile, setCurrentFile] = useState(undefined);
    const [previewImage, setPreviewImage] = useState(undefined);

    const selectFile = (event) => {
        const currentFile = event.target.files[0];
        const previewImage = URL.createObjectURL(event.target.files[0]);
        setCurrentFile(currentFile);
        setPreviewImage(previewImage);
    };

    useEffect(() => {
        setFile(currentFile);
    }, [currentFile]);

    const confirmFile = (event) => {
        setImage(previewImage);
    };

    const deleteFile = (event) => {
        setCurrentFile(undefined);
        setPreviewImage(undefined);
    };

    return (
        <div>
            <button type="button" className=""
                data-bs-toggle="modal" data-bs-target="#imageModal">
                {currentFile == undefined ? 'Escolher uma imagem' : 'Trocar a imagem'}
            </button>

            <div className="flex flex-row" id="imageModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="">
                    <div className="">
                        <div className="modal-body">
                            <div className="img-card">
                                <div className="flex">
                                    <label htmlFor="uploadImage" className="bg-green  text-black m-2 py-2 px-4 rounded  hover:bg-black hover:text-orange duration-500">
                                        Escolha a imagem
                                        <input type="file" name="file" accept="image/*" id="uploadImage"
                                            onChange={selectFile} />
                                    </label>
                      
                                    <button type="button" className="bg-red  text-black m-2 py-2 px-4 rounded " onClick={deleteFile}>
                                    <p className="">{currentFile != null ? currentFile.name : 'Nenhum arquivo escolhido'}</p>
                                    </button>
                                </div>

                                {previewImage && (
                                    <div>
                                        <img id="preView" className="rounded shadow d-block mx-auto img-fluid"
                                            src={previewImage} alt="" />
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" onClick={deleteFile}
                                className="" data-bs-dismiss="modal">Cancelar</button>
                            <button type="button" onClick={confirmFile}
                                className="btn btn-primary" data-bs-dismiss="modal">Confirmar</button>
                        </div>
                    </div>
                </div>
            </div>
            {chosenImage && (
                <div>
                    <img id="preView" className="rounded shadow d-block mx-auto img-fluid"
                        src={chosenImage} alt="" />
                </div>
            )}
        </div>
    );
};

export default ImageUploaderModal;