import React from 'react';
import {
  AppShell,
  AppShellHeader,
  AppShellMain,
  Container,
  Group,
  Title,
  Text,
  Button,
  Card,
  Badge,
  Stack,
  Divider,
  Flex,
} from '@mantine/core';
import {
  IconCoins,
} from '@tabler/icons-react';
import './Main.css';

export default function Main() {
  return (
    <AppShell header={{ height: 72 }} padding="md">
      {/* HEADER */}
      <AppShellHeader className="app-header">
        <Container size="lg" h="100%">
          <Group h="100%" justify="space-between" wrap="nowrap">
            <Group gap="xs">
              <Title c="white">TuniPaw • Rescue non-profit</Title>
              <Badge variant="dark" color="green" className="badge">
                Funded by TuniPaw coin
              </Badge>
            </Group>
          </Group>
        </Container>
      </AppShellHeader>

      {/* MAIN */}
      <AppShellMain>
        {/* HERO */}
        <section className="hero">
          <Container size="lg">
            <Stack gap="md" align="center" ta="center">
            <img src="/dogs.png" alt="Ramy the dog" style={{ width: '100%', borderRadius: '16px' }} />
              <Title order={1} className="hero-title">
                Food, care, and safe shelter{' '}
                — powered by your kindness through TuniPaw coin
              </Title>
              <Text fz="lg" c="dimmed" maw={760}>
                We rescue, feed, and shelter stray dogs and cats across Tunisia. 100% of
                donations go to supplies, medicine, and vetted partners. Transparent.
                On-chain. Community-driven.
              </Text>
              <Group gap="sm">
                <Button
                  size="lg"
                  className="btn-primary"
                >
                  Donate TuniPaw coin
                </Button>
              </Group>
              <Group gap="sm" className="stats">
            
                <div className="stat">
                  <Text fw={700} fz="xl" className='theme-color-2'>
                    5700 TuniPaw coins donated made the below possible
                  </Text>
                </div>
                <Divider orientation="vertical" />
                  <div className="stat">
                  <Text fw={700} fz="xl" className='theme-color-2'>
                    1,200+
                  </Text>
                  <Text c="dimmed" fz="sm">
                    Meals delivered
                  </Text>
                </div>
                <Divider orientation="vertical" />
                <div className="stat">
                  <Text fw={700} fz="xl" className='theme-color-2'>
                    180
                  </Text>
                  <Text c="dimmed" fz="sm">
                    Animals treated
                  </Text>
                </div>
                <Divider orientation="vertical" />
                <div className="stat">
                  <Text fw={700} fz="xl" className='theme-color-2'>
                    12
                  </Text>
                  <Text c="dimmed" fz="sm">
                    Partner vets
                  </Text>
                </div>
              </Group>
            </Stack>
          </Container>
        </section>
        <div>

        <Flex gap="20px" justify="center" mb="40px">
            <img src="/ramy.jpeg" alt="Ramy the dog" style={{ width: '400px', borderRadius: '16px', marginRight: "20px" }} />
            <img src="/ramy-3.png" alt="Ramy the dog" style={{ width: '605px', borderRadius: '16px' }} />
            <img src="/ramy-4.png" alt="Ramy the dog" style={{ width: '605px', borderRadius: '16px' }} />
        </Flex>
        </div>

        {/* HOW IT WORKS */}
        <section className="section-muted">
          <Container size="lg">
            <Title order={2} ta="center" mb="sm">
              How it works
            </Title>
            <Text ta="center" c="dimmed" mb="xl">
              Simple, transparent flow from your wallet to local impact.
            </Text>

            <Flex
              gap="lg"
              justify="center"
              align="stretch"
              wrap="wrap"
              className="cards-row"
            >
              <Card withBorder className="step-card">
                <Badge color="teal" variant="light">
                  Step 1
                </Badge>
                <Title order={4} mt="xs">
                  Donate
                </Title>
                <Text c="dimmed" mt="xs">
                  Connect wallet and donate in MATIC/USDC or our charity coin.
                </Text>
              </Card>

              <Card withBorder className="step-card">
                <Badge color="teal" variant="light">
                  Step 2
                </Badge>
                <Title order={4} mt="xs">
                  Allocate
                </Title>
                <Text c="dimmed" mt="xs">
                  Funds go to food, treatment, and shelter. Multi-sig secured.
                </Text>
              </Card>

              <Card withBorder className="step-card">
                <Badge color="teal" variant="light">
                  Step 3
                </Badge>
                <Title order={4} mt="xs">
                  See Impact
                </Title>
                <Text c="dimmed" mt="xs">
                  Live transparency page with receipts, photos, and on-chain totals.
                </Text>
              </Card>
            </Flex>

            <Group justify="center" mt="xl">
              <Button leftSection={<IconCoins size={18} />} className="btn-primary">
                Donate now
              </Button>
              <Button variant="light" className="btn-glass">
                Transparency
              </Button>
            </Group>
          </Container>
        </section>

        {/* FOOTER */}
        <footer className="footer">
          <Container size="lg">
            <Group justify="space-between" wrap="wrap">
              <Group gap="xs">
                <div className="logo-dot" />
                <Text fw={700}>TuniPaw</Text>
                <Badge color="teal" variant="light">
                  Since 2025
                </Badge>
              </Group>
              <Text c="dimmed" fz="sm">
                © {new Date().getFullYear()} TuniPaw • All rights reserved
              </Text>
            </Group>
          </Container>
        </footer>
      </AppShellMain>
    </AppShell>
  );
}
