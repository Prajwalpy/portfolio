const Skills = () => {
  const skills = [
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', color: 'from-blue-500 to-yellow-400' },
    { name: 'MATLAB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg', color: 'from-orange-400 to-red-500' },
    { name: 'NumPy', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg', color: 'from-blue-400 to-cyan-500' },
    { name: 'Pandas', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg', color: 'from-purple-500 to-indigo-600' },
    { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', color: 'from-blue-400 to-indigo-600' },
    { name: 'SOLIDWORKS', icon: 'https://1000logos.net/wp-content/uploads/2020/08/SolidWorks-Logo-1280x800.png', color: 'from-red-400 to-orange-500' },
    { name: 'AutoCAD', icon: 'https://logos-world.net/wp-content/uploads/2023/09/Autodesk-Logo-500x281.png', color: 'from-blue-500 to-cyan-500' },
    { name: 'Tableau', icon: '📊', color: 'from-orange-500 to-red-600' },
    { name: 'Microsoft Office', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg', color: 'from-blue-600 to-blue-800' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', color: 'from-orange-500 to-red-500' },
  ];

  return (
    <section id="skills" className="min-h-screen py-20" style={{ backgroundColor: '#E5E7EB' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1E293B' }}>
            Essential <span style={{ color: '#1E293B' }}>Tools</span> I Use
          </h2>
          <p className="text-lg" style={{ color: '#1E293B' }}>Technologies and frameworks I work with</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group p-8 border rounded-xl hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              style={{ 
                backgroundColor: '#F1F5F9',
                borderColor: '#2563EB',
                animationDelay: `${index * 0.1}s` 
              }}
            >
              <div className="flex items-center gap-4">
                {skill.icon.startsWith('http') ? (
                  <img src={skill.icon} alt={skill.name} className="w-12 h-12" />
                ) : (
                  <div className="text-5xl">{skill.icon}</div>
                )}
                <h3 className="text-lg font-semibold" style={{ color: '#1E293B' }}>{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
