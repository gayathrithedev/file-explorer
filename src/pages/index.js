import Folder from '@/components/Folder';
import React, {useState} from 'react';
import { explorer } from '@/data/folderData';

const Home = () => {
  const [explorerData, setExplorerData] = useState(explorer);
  return (
    <div>
      <Folder explorer={explorerData} />
    </div>
  )
}

export default Home;