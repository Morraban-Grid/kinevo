import React, { useMemo, useState } from 'react'
import AppLayout from '@/components/layout/AppLayout'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'

type TabKey = 'home' | 'workout' | 'nutrition' | 'statistics' | 'settings'

const navItems: Array<{ key: TabKey; label: string; icon: string }> = [
  { key: 'home', label: 'Home', icon: '⌂' },
  { key: 'workout', label: 'Workout', icon: '◉' },
  { key: 'nutrition', label: 'Nutrition', icon: '◔' },
  { key: 'statistics', label: 'Statistics', icon: '◌' },
  { key: 'settings', label: 'Settings', icon: '⚙︎' },
]

const dailyMetrics = {
  calories: { value: 1740, goal: 2200, unit: 'kcal' },
  steps: { value: 8240, goal: 10000, unit: 'steps' },
  active: { value: 42, goal: 60, unit: 'min' },
}

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('home')

  const headlineMetric = useMemo(() => {
    const ratio = dailyMetrics.active.value / dailyMetrics.active.goal
    if (ratio >= 0.8) {
      return 'You are on track to close your activity ring today.'
    }

    return 'A 15-minute walk now will put you back on track.'
  }, [])

  const renderHome = () => (
    <>
      <Card className="hero-card">
        <p className="eyebrow">Today · Friday</p>
        <h1 className="hero-title">Move with intention.</h1>
        <p className="hero-subtitle">
          You have completed 42 active minutes and burned 1,740 kcal. Keep the momentum and finish strong.
        </p>
        <Button variant="primary">Start Workout</Button>
      </Card>

      <Card>
        <div className="section-heading">
          <h2>Daily focus</h2>
          <span className="chip">Most important</span>
        </div>
        <p className="muted-text">{headlineMetric}</p>
        <div className="ring-grid" aria-label="Daily activity progress">
          <MetricRing label="Active time" value={dailyMetrics.active.value} goal={dailyMetrics.active.goal} unit="min" />
          <MetricRing label="Steps" value={dailyMetrics.steps.value} goal={dailyMetrics.steps.goal} unit="" />
          <MetricRing label="Calories" value={dailyMetrics.calories.value} goal={dailyMetrics.calories.goal} unit="kcal" />
        </div>
      </Card>

      <Card>
        <div className="section-heading">
          <h2>Coach notes</h2>
        </div>
        <ul className="insight-list">
          <li>Strength performance improved by 8% compared with last week.</li>
          <li>Hydration trend is below target on high-intensity days.</li>
          <li>Evening mobility sessions reduce next-day soreness significantly.</li>
        </ul>
      </Card>
    </>
  )

  const renderWorkout = () => (
    <>
      <Card>
        <div className="section-heading"><h2>Today’s session</h2></div>
        <p className="strong-text">Full Body Strength · 38 min</p>
        <p className="muted-text">6 movements · Intermediate · Equipment: Dumbbells</p>
        <div className="button-row">
          <Button variant="primary">Start Workout</Button>
          <Button variant="secondary">Preview Plan</Button>
        </div>
      </Card>
      <Card>
        <div className="section-heading"><h2>Recovery</h2></div>
        <p className="muted-text">Cooldown and mobility are recommended after your training block.</p>
        <Button variant="secondary">Open Recovery Flow</Button>
      </Card>
    </>
  )

  const renderNutrition = () => (
    <>
      <Card>
        <div className="section-heading"><h2>Nutrition plan</h2></div>
        <p className="strong-text">Performance Balanced Day</p>
        <p className="muted-text">2,150 kcal target · 35% carbs · 35% protein · 30% fats</p>
        <div className="progress-stack">
          <ProgressBar label="Calories" value={1740} max={2150} />
          <ProgressBar label="Protein" value={122} max={160} unit="g" />
          <ProgressBar label="Hydration" value={1.8} max={2.5} unit="L" />
        </div>
      </Card>
      <Card>
        <div className="section-heading"><h2>Next meal</h2></div>
        <p className="strong-text">Salmon bowl with quinoa and greens</p>
        <p className="muted-text">Ready in 15 minutes · 42g protein · 560 kcal</p>
        <Button variant="secondary">View Recipe</Button>
      </Card>
    </>
  )

  const renderStatistics = () => (
    <>
      <Card>
        <div className="section-heading">
          <h2>Weekly highlights</h2>
          <span className="chip">+12% vs last week</span>
        </div>
        <div className="stats-block">
          <MetricRow label="Calories burned" value="12,420 kcal" progress={82} />
          <MetricRow label="Steps" value="58,300" progress={74} />
          <MetricRow label="Active time" value="304 min" progress={86} />
        </div>
      </Card>
      <Card>
        <div className="section-heading"><h2>Training consistency</h2></div>
        <p className="strong-text">5 workouts completed this week</p>
        <p className="muted-text">Your best streak this month is 9 consecutive days.</p>
      </Card>
    </>
  )

  const renderSettings = () => (
    <>
      <Card>
        <h2 className="settings-title">Account</h2>
        <button className="settings-item" type="button">Profile & Preferences</button>
        <button className="settings-item" type="button">Notification Schedule</button>
      </Card>

      <Card>
        <h2 className="settings-title">Subscription</h2>
        <button className="settings-item" type="button">Manage Plan</button>
        <button className="settings-item" type="button">Billing History</button>
      </Card>

      <Card>
        <h2 className="settings-title">Legal</h2>
        <button className="settings-item" type="button">Privacy Policy</button>
        <button className="settings-item" type="button">Terms of Service</button>
      </Card>

      <Card className="danger-zone">
        <h2 className="settings-title">Danger Zone</h2>
        <p className="muted-text">Deleting your account removes all progress history and personalized plans.</p>
        <Button variant="destructive">Delete Account</Button>
        <Button variant="secondary">Cancel</Button>
      </Card>
    </>
  )

  return (
    <AppLayout>
      <main className="app-shell" role="main">
        <section className="screen-content">
          {activeTab === 'home' && renderHome()}
          {activeTab === 'workout' && renderWorkout()}
          {activeTab === 'nutrition' && renderNutrition()}
          {activeTab === 'statistics' && renderStatistics()}
          {activeTab === 'settings' && renderSettings()}
        </section>

        <nav className="bottom-nav" aria-label="Primary tabs">
          {navItems.map((item) => (
            <button
              key={item.key}
              className={`nav-item ${activeTab === item.key ? 'nav-item-active' : ''}`}
              onClick={() => setActiveTab(item.key)}
              type="button"
              aria-current={activeTab === item.key ? 'page' : undefined}
            >
              <span className="nav-icon" aria-hidden="true">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
            </button>
          ))}
        </nav>
      </main>
    </AppLayout>
  )
}

const ProgressBar: React.FC<{ label: string; value: number; max: number; unit?: string }> = ({
  label,
  value,
  max,
  unit = '',
}) => {
  const percentage = Math.min(100, Math.round((value / max) * 100))

  return (
    <div>
      <div className="progress-header">
        <span>{label}</span>
        <span>{value}{unit} / {max}{unit}</span>
      </div>
      <div className="progress-track" role="progressbar" aria-label={label} aria-valuenow={percentage}>
        <span className="progress-fill" style={{ width: `${percentage}%` }} />
      </div>
    </div>
  )
}

const MetricRow: React.FC<{ label: string; value: string; progress: number }> = ({ label, value, progress }) => (
  <div className="metric-row">
    <div className="progress-header">
      <span>{label}</span>
      <span className="strong-text">{value}</span>
    </div>
    <div className="progress-track">
      <span className="progress-fill" style={{ width: `${progress}%` }} />
    </div>
  </div>
)

const MetricRing: React.FC<{ label: string; value: number; goal: number; unit: string }> = ({
  label,
  value,
  goal,
  unit,
}) => {
  const percentage = Math.min(100, Math.round((value / goal) * 100))

  return (
    <div className="ring-card">
      <div
        className="ring"
        style={{
          background: `conic-gradient(var(--accent) ${percentage * 3.6}deg, var(--ring-track) 0deg)`,
        }}
      >
        <span>{percentage}%</span>
      </div>
      <p className="ring-label">{label}</p>
      <p className="muted-text">{value}{unit ? ` ${unit}` : ''}</p>
    </div>
  )
}

export default App
