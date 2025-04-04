import SelectTopic from './_components/SelectTopic'

export default function page() {
  return (
    <div className="md:px-20">
      <h2 className="font-bold text-4xl text-primary text-center">
        Create new
      </h2>
      <div className="mt-10 p-10 shadow-md">
        <SelectTopic />
      </div>
    </div>
  )
}
