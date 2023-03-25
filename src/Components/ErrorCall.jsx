function ErrorCall({children}) {
  return (
    <div className="font-bold text-lg bg-red-500 rounded text-center py-1 mb-3 uppercase tracking-wide">
      {children}
    </div>
  )
}

export default ErrorCall
