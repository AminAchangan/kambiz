const WithCount = (warppedComponent) => {
    return () => {
        const [count, setCount] = useState(0);
        const incrementCount = () => {
            setCount(count + 1);
        };
    return <warppedComponent  />;
  };
};

export default WithCount;
