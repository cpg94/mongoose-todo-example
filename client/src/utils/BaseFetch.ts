class BaseFetch {
  fetch = async (url: string, options: { method: string; body?: string }) => {
      const token = localStorage.getItem("token");
      const req = await fetch(`http://localhost:3001/${url}`, {
        ...options,
        headers: {
          "Content-Type": "application/json",
          authorization: token || "",
        },
      });

      if(!req.ok){
          throw new Error(req.statusText)
      }
      return req;
    
  };
}

export default BaseFetch;
