import { useState } from 'react';
import { Share2, Trash2 } from 'lucide-react';
import { FESTIVALS } from '../data/festivals';

interface PlanItem {
  id: string;
  festival: string;
  tasks: { id: string; text: string; completed: boolean; }[];
}

export default function PlanCreator() {
  const [plans, setPlans] = useState<PlanItem[]>(() => {
    const savedPlans = localStorage.getItem('festivalPlans');
    return savedPlans ? JSON.parse(savedPlans) : [];
  });
  const [selectedFestival, setSelectedFestival] = useState('Diwali');

  const defaultTasks = {
    // Hindu Festivals
    'Diwali': [
      'Clean and decorate house',
      'Buy new clothes',
      'Prepare sweets and snacks',
      'Arrange diyas and lights',
      'Plan family gathering',
      'Perform Lakshmi Puja',
      'Exchange gifts'
    ],
    'Holi': [
      'Buy natural colors and pichkaris',
      'Prepare gujiya and traditional snacks',
      'Arrange music system',
      'Plan outdoor celebration',
      'Buy protective clothing',
      'Organize Holika Dahan',
      'Prepare thandai'
    ],
    'Krishna Janmashtami': [
      'Prepare prasad',
      'Decorate Krishna idol',
      'Arrange for midnight celebration',
      'Set up swing for Krishna',
      'Plan bhajan program',
      'Organize Dahi Handi event',
      'Fast preparations'
    ],
    'Ganesh Chaturthi': [
      'Get Ganesh idol',
      'Prepare modak and prasad',
      'Decorate the shrine',
      'Arrange for puja items',
      'Plan visarjan ceremony',
      'Set up pandal',
      'Organize aarti sessions'
    ],
    'Durga Puja': [
      'Plan pandal visits',
      'Buy new clothes',
      'Arrange for bhog',
      'Schedule cultural programs',
      'Prepare prasad',
      'Plan sindoor khela',
      'Organize dhunuchi dance'
    ],
    // Muslim Festivals
    'Eid ul-Fitr': [
      'Plan special prayers',
      'Prepare sewaiyan',
      'Buy new clothes',
      'Arrange family feast',
      'Prepare Eidi for children',
      'Clean house',
      'Plan charity distribution'
    ],
    'Eid ul-Adha': [
      'Arrange for Qurbani',
      'Plan morning prayers',
      'Prepare special dishes',
      'Organize family gathering',
      'Plan meat distribution',
      'Buy new clothes',
      'Arrange for charity'
    ],
    'Muharram': [
      'Arrange for majlis',
      'Prepare special food',
      'Plan procession participation',
      'Organize prayer meetings',
      'Set up water distribution',
      'Arrange for taazia',
      'Plan charity events'
    ],
    // Sikh Festivals
    'Guru Nanak Jayanti': [
      'Plan Gurudwara visit',
      'Arrange langar seva',
      'Organize kirtan',
      'Prepare kada prasad',
      'Plan nagar kirtan participation',
      'Arrange for akhand path',
      'Set up community service'
    ],
    'Baisakhi': [
      'Plan Gurudwara visit',
      'Arrange for kirtan',
      'Prepare traditional food',
      'Plan harvest celebration',
      'Organize community lunch',
      'Arrange cultural programs',
      'Set up bhangra events'
    ],
    'Lohri': [
      'Arrange bonfire materials',
      'Prepare traditional snacks',
      'Buy rewri and peanuts',
      'Plan folk songs and dances',
      'Organize community gathering',
      'Arrange for dhol',
      'Prepare prasad'
    ],
    // Christian Festivals
    'Christmas': [
      'Decorate Christmas tree',
      'Plan midnight mass',
      'Prepare Christmas dinner',
      'Arrange gifts',
      'Plan carol singing',
      'Bake Christmas cake',
      'Set up nativity scene'
    ],
    'Easter': [
      'Plan Easter mass',
      'Prepare Easter eggs',
      'Arrange Easter lunch',
      'Plan egg hunt',
      'Decorate house',
      'Prepare Easter baskets',
      'Organize family gathering'
    ],
    'Good Friday': [
      'Plan church service',
      'Prepare special prayers',
      'Arrange for fasting',
      'Plan stations of the cross',
      'Organize community service',
      'Prepare traditional meal',
      'Set up prayer space'
    ],
    // Jain Festivals
    'Paryushan': [
      'Plan fasting schedule',
      'Arrange for pravachan',
      'Prepare for samvatsari',
      'Plan meditation sessions',
      'Organize spiritual readings',
      'Arrange for pratikraman',
      'Plan forgiveness ceremony'
    ],
    'Mahavir Jayanti': [
      'Plan temple visit',
      'Arrange for puja',
      'Organize procession',
      'Prepare prasad',
      'Plan charitable activities',
      'Arrange lectures',
      'Set up meditation space'
    ],
    // Buddhist Festivals
    'Buddha Purnima': [
      'Plan temple visit',
      'Arrange meditation session',
      'Prepare offerings',
      'Organize prayer ceremony',
      'Plan charitable activities',
      'Arrange for teachings',
      'Set up prayer space'
    ],
    'Losar': [
      'Clean and decorate house',
      'Prepare traditional food',
      'Plan prayer ceremony',
      'Arrange family gathering',
      'Make offerings',
      'Plan community events',
      'Organize cultural programs'
    ]
  };

  const createNewPlan = () => {
    const newPlan: PlanItem = {
      id: Date.now().toString(),
      festival: selectedFestival,
      tasks: defaultTasks[selectedFestival as keyof typeof defaultTasks].map(text => ({
        id: Math.random().toString(36).substr(2, 9),
        text,
        completed: false
      }))
    };
    
    const updatedPlans = [...plans, newPlan];
    setPlans(updatedPlans);
    localStorage.setItem('festivalPlans', JSON.stringify(updatedPlans));
  };

  const toggleTask = (planId: string, taskId: string) => {
    const updatedPlans = plans.map(plan => {
      if (plan.id === planId) {
        return {
          ...plan,
          tasks: plan.tasks.map(task => 
            task.id === taskId ? { ...task, completed: !task.completed } : task
          )
        };
      }
      return plan;
    });
    setPlans(updatedPlans);
    localStorage.setItem('festivalPlans', JSON.stringify(updatedPlans));
  };

  const deletePlan = (planId: string) => {
    const updatedPlans = plans.filter(plan => plan.id !== planId);
    setPlans(updatedPlans);
    localStorage.setItem('festivalPlans', JSON.stringify(updatedPlans));
  };

  const sharePlan = (plan: PlanItem) => {
    const completedTasks = plan.tasks.filter(task => task.completed).length;
    const totalTasks = plan.tasks.length;
    const text = `My ${plan.festival} Planning Progress (${completedTasks}/${totalTasks} tasks completed):\n\n${plan.tasks.map(task => `${task.completed ? '✅' : '⬜'} ${task.text}`).join('\n')}`;
    
    if (navigator.share) {
      navigator.share({
        title: `My ${plan.festival} Plan`,
        text: text
      }).catch(console.error);
    } else {
      navigator.clipboard.writeText(text)
        .then(() => alert('Plan copied to clipboard!'))
        .catch(console.error);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Create Plan</h2>
        <div className="flex gap-4">
          <select
            value={selectedFestival}
            onChange={(e) => setSelectedFestival(e.target.value)}
            className="px-3 py-1 border rounded-md"
          >
            {FESTIVALS.map(festival => (
              <option key={festival.title} value={festival.title}>
                {festival.title}
              </option>
            ))}
          </select>
          <button
            onClick={createNewPlan}
            className="bg-[#E84D1C] text-white px-4 py-1 rounded-md hover:bg-[#d64718]"
          >
            Create New Plan
          </button>
        </div>
      </div>

      <div className="space-y-6 max-h-[600px] overflow-y-auto">
        {plans.map(plan => (
          <div key={plan.id} className="border rounded-lg p-4">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-lg font-semibold">{plan.festival} Plan</h3>
              <div className="flex gap-2">
                <button
                  onClick={() => sharePlan(plan)}
                  className="p-2 hover:bg-gray-100 rounded-full"
                  title="Share plan"
                >
                  <Share2 className="w-5 h-5 text-gray-600" />
                </button>
                <button
                  onClick={() => deletePlan(plan.id)}
                  className="p-2 hover:bg-gray-100 rounded-full"
                  title="Delete plan"
                >
                  <Trash2 className="w-5 h-5 text-red-500" />
                </button>
              </div>
            </div>
            <div className="space-y-2">
              {plan.tasks.map(task => (
                <label key={task.id} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTask(plan.id, task.id)}
                    className="w-4 h-4 text-[#E84D1C] rounded"
                  />
                  <span className={task.completed ? 'line-through text-gray-500' : ''}>
                    {task.text}
                  </span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}