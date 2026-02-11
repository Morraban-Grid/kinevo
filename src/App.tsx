import React, { useMemo, useState } from 'react'
import AppLayout from '@/components/layout/AppLayout'
import Header from '@/components/layout/Header'
import EnergyChart from '@/components/charts/EnergyChart'
import ChatWidget from '@/components/chat/ChatWidget'
import WorkoutCard from '@/components/workout/WorkoutCard'
import MealPlanCard from '@/components/nutrition/MealPlanCard'
import InsightCard from '@/components/insights/InsightCard'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import LoadingOverlay from '@/components/ui/LoadingOverlay'

import { mockWorkouts } from '@/data/mockWorkouts'
import { mockMeals } from '@/data/mockMeals'
import { mockInsights } from '@/data/mockInsights'
import { mockProgressSummary } from '@/data/mockProgress'

type NutritionFilter = 'energy' | 'muscle' | 'weight-loss' | 'balance'

const App: React.FC = () => {
  const [isPlanningWeek, setIsPlanningWeek] = useState(false)
  const [nutritionFilter, setNutritionFilter] =
    useState<NutritionFilter>('balance')

  const featuredWorkout = mockWorkouts[0]

  const filteredMeals = useMemo(
    () =>
      mockMeals.filter((meal) => meal.goal === nutritionFilter),
    [nutritionFilter]
  )

  const heroSubtitle = useMemo(() => {
    const { totalWorkoutsThisWeek, totalMinutesThisWeek, currentStreakDays } =
      mockProgressSummary

    return `Has completado ${totalWorkoutsThisWeek} entrenamientos y acumulado ${totalMinutesThisWeek} minutos. Racha actual: ${currentStreakDays} días.`
  }, [])

  const handlePlanWeek = () => {
    setIsPlanningWeek(true)

    window.setTimeout(() => {
      setIsPlanningWeek(false)
    }, 1400)
  }

  return (
    <AppLayout>
      <LoadingOverlay
        isVisible={isPlanningWeek}
        message="Diseñando tu semana ideal..."
      />

      <main role="main" className="app-container">
        <Header
          title="Kinevo"
          subtitle="Tu asistente inteligente de movimiento"
        />

        <section className="app-content">
          {/* Hero */}
          <section className="dashboard-hero">
            <div className="dashboard-hero-text">
              <p className="hero-label">Hoy</p>
              <h2 className="hero-title">
                Equilibrio y constancia
              </h2>
              <p className="hero-subtitle">{heroSubtitle}</p>
            </div>

            <Button
              variant="primary"
              onClick={handlePlanWeek}
            >
              Planificar mi semana
            </Button>
          </section>

          {/* Resumen semanal */}
          <section className="section">
            <div className="section-header">
              <h3 className="section-title">
                Resumen semanal
              </h3>
              <p className="section-subtitle">
                Una vista rápida de tu progreso
              </p>
            </div>

            <div className="stats-grid">
              <Card className="stat-card">
                <p className="stat-label">Entrenamientos</p>
                <p className="stat-value-lg">
                  {mockProgressSummary.totalWorkoutsThisWeek}
                </p>
                <p className="stat-hint">esta semana</p>
              </Card>

              <Card className="stat-card">
                <p className="stat-label">Minutos activos</p>
                <p className="stat-value-lg">
                  {mockProgressSummary.totalMinutesThisWeek}
                </p>
                <p className="stat-hint">min totales</p>
              </Card>

              <Card className="stat-card">
                <p className="stat-label">Racha</p>
                <p className="stat-value-lg">
                  {mockProgressSummary.currentStreakDays}d
                </p>
                <p className="stat-hint">de constancia</p>
              </Card>
            </div>
          </section>

          {/* Energía */}
          <section className="section">
            <div className="section-header">
              <h3 className="section-title">
                Energía semanal
              </h3>
              <p className="section-subtitle">
                Observa cómo varía tu energía
              </p>
            </div>

            <EnergyChart />
          </section>

          {/* Entrenamiento destacado */}
          <section className="section">
            <div className="section-header">
              <h3 className="section-title">
                Entrenamiento destacado
              </h3>
              <p className="section-subtitle">
                Sugerencia guiada para hoy
              </p>
            </div>

            <WorkoutCard workout={featuredWorkout} />
          </section>

          {/* Nutrición */}
          <section className="section">
            <div className="section-header section-header-row">
              <div>
                <h3 className="section-title">
                  Nutrición sugerida
                </h3>
                <p className="section-subtitle">
                  Ajusta el enfoque según tu objetivo
                </p>
              </div>

              <div className="pill-toggle-group">
                {(
                  ['balance', 'energy', 'muscle', 'weight-loss'] as NutritionFilter[]
                ).map((option) => (
                  <button
                    key={option}
                    type="button"
                    className={`pill-toggle ${
                      nutritionFilter === option
                        ? 'pill-toggle-active'
                        : ''
                    }`}
                    onClick={() => setNutritionFilter(option)}
                  >
                    {option === 'balance' && 'Balance'}
                    {option === 'energy' && 'Energía'}
                    {option === 'muscle' && 'Músculo'}
                    {option === 'weight-loss' && 'Pérdida de peso'}
                  </button>
                ))}
              </div>
            </div>

            <div className="section-list">
              {filteredMeals.map((meal) => (
                <MealPlanCard key={meal.id} meal={meal} />
              ))}
            </div>
          </section>

          {/* Insights */}
          <section className="section">
            <div className="section-header">
              <h3 className="section-title">
                Insights de tu asistente
              </h3>
              <p className="section-subtitle">
                Mensajes que te ayudan a mantener el rumbo
              </p>
            </div>

            <div className="section-list">
              {mockInsights.slice(0, 3).map((insight) => (
                <InsightCard key={insight.id} insight={insight} />
              ))}
            </div>
          </section>

          {/* Chat */}
          <section className="section">
            <div className="section-header">
              <h3 className="section-title">
                Conversa con Kinevo
              </h3>
              <p className="section-subtitle">
                Interacción simulada, sin conexión a servidores reales
              </p>
            </div>

            <ChatWidget />
          </section>
        </section>
      </main>
    </AppLayout>
  )
}

export default App
