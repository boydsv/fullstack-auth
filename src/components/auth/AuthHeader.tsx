const AuthHeader = ({
  mainText,
  secondText,
}: {
  mainText: string;
  secondText: string;
}) => {
  return (
    <div className="mb-8 text-right">
      <h1 className="text-2xl text-[#3C3C3C] font-bold">{mainText}</h1>

      <p className="mt-2 font-medium text-[#808080]">{secondText}</p>
    </div>
  );
};

export default AuthHeader;
