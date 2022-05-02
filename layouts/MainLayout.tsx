interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = (props: MainLayoutProps) => {
  return (
    <div>
      <div className="container">
        <main>{props.children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
