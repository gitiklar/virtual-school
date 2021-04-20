import { useEffect , useState } from 'react';
import { useHistory } from "react-router-dom";

const useModal = (modalName) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const history = useHistory();
    const routeToHome = () => history.push("/home");
    const routeToModal = () => history.push(`/home/${modalName}`);

    useEffect(() => {
        history.location.pathname === "/home" && setIsModalVisible(false);
        history.location.pathname === `/home/${modalName}` && setIsModalVisible(true);
      }, [history.location.pathname]);

      return [isModalVisible , routeToHome , routeToModal];
};

export default useModal;