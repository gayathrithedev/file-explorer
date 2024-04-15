import React, { useState } from 'react';
import styles from './Folder.module.css';

const Folder = ({explorer}) => {
    const [expand, setExpand] = useState(false);
    const [showInput, setShowInput] = useState({
        visible: false,
        isFolder: null
    });

    const handleNewFolder = (e) => {
        e.stopPropagation();
        setExpand(true);
        setShowInput({
            visible: true,
            isFolder: true
        })
    }
    const handleNewFile = (e) => {
        e.stopPropagation();
        setExpand(true);
        setShowInput({
            visible: true,
            isFolder: false
        })
    }

    if(explorer.isFolder) {
        return (
            <div>
                <div className={styles.folder} onClick={() => setExpand(!expand)}>
                    <span>📁 {explorer.name}</span>
                    <div>
                        <button className={styles.button} onClick={handleNewFolder}>Folder+</button>
                        <button className={styles.button} onClick={handleNewFile}>File+</button>
                    </div>
                </div>
                <div style={{display: expand ? 'block' : 'none', paddingLeft: 16}}>
                    {
                        showInput.visible && (
                            <div style={styles.inputContainer}>
                                <span>{showInput.isFolder ? '📁' : '📄'}</span>
                                <input
                                    autoFocus 
                                    className={styles.input} 
                                    type="text" 
                                    onBlur={() => setShowInput({...showInput, visible: false})}
                                />
                            </div>
                        )
                    }
                    {explorer.items.map((item) => {
                        return (
                            <Folder explorer={item} key={item.id} />
                        )
                    })}
                </div>
            </div>
          )
    } else {
        return (
            <div className={styles.file}>
                <span>📄 {explorer.name}</span>
            </div>
        )
    }
  
}
export default Folder; 