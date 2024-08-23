
export const Card = ({ children, ...props }) => {
  return (
    <div className="card" {...props}>
      {children}
    </div>
  );
};

export const CardHeader = ({ children, ...props }) => {
  return (
    <div className="card-header" {...props}>
      {children}
    </div>
  );
};

export const CardTitle = ({ children, ...props }) => {
  return (
    <h2 className="card-title" {...props}>
      {children}
    </h2>
  );
};

export const CardDescription = ({ children, ...props }) => {
  return (
    <p className="card-description" {...props}>
      {children}
    </p>
  );
};

export const CardContent = ({ children, ...props }) => {
  return (
    <div className="card-content" {...props}>
      {children}
    </div>
  );
};

export const CardFooter = ({ children, ...props }) => {
  return (
    <div className="card-footer" {...props}>
      {children}
    </div>
  );
};

