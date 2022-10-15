import { selectIsLoading ,selectError} from "../redux/selectors";
import { useSelector } from "react-redux";
import Contact from './Contacts/Contacts'
import Filter from './Filter/Filter'
import Form from './Form/Form'
import { Loader } from "./Loader/Loader";


export function App(){
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError)
    return(<>
       {isLoading && !error && <Loader />}
      <Form  />
      <Filter  />
      <Contact />
      </>
      )
}
