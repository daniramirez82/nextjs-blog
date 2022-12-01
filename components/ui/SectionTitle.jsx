
const SectionTitle = ({category})=>{

    return(
      <p className='text-xl text-slate-400 font-bold pt-8  border-b-slate-900 '>{category.toUpperCase()}</p>

    )
}

export default SectionTitle;