export default function Input({ placeholder, value, onChange, required, disabled}) {
    return (
        <input
         className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
         type="text" placeholder={placeholder} value={value} onChange={onChange} required={required} disabled={disabled} />
    )
}